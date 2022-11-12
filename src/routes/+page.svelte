<script lang="ts">
    import { tick } from "svelte";


    let tiles: number[][] = [];
    function initialise_board() {
        for (let i = 0; i < 4; i++) {
            tiles.push([])
            for (let j = 0; j < 4; j++) {
                tiles[i].push(0)
            }
        }

        tiles = generate_tile(tiles)
        tiles = generate_tile(tiles)
    }

    function generate_tile(tiles: number[][]): number[][] {
        if (check_full(tiles)) {
            return tiles
        } 
        let x = Math.floor(Math.random() * 4)
        let y = Math.floor(Math.random() * 4)
        if (tiles[x][y] == 0) {
            tiles[x][y] = 2
            return tiles
        } else {
            return generate_tile(tiles)
        }
    }

    function check_full(tiles: number[][]): boolean {
        let full = true
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (!tiles[i][j]) {
                    return false
                }
            }
        }
        return true
    }

    function check_win(tiles: number[][]): boolean {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (tiles[i][j] === 2048) {
                    return true
                }
            }
        }
        return false
    }

    initialise_board()

    async function execute_keydown(event: KeyboardEvent) {
        if (event.key === "ArrowUp") {
            tiles = move(tiles, [-1, 0], Direction.Up)
        } else if (event.key === "ArrowDown") {
            tiles = move(tiles, [1, 0], Direction.Down)
        } else if (event.key === "ArrowLeft") {
            tiles = move(tiles, [0, -1], Direction.Left)
        } else if (event.key === "ArrowRight") {
            tiles = move(tiles, [0, 1], Direction.Right)
        }
        await tick()

        if (check_win(tiles)) {
            alert("You win!")
        }
    }

    enum Direction {
        Up, Down, Left, Right
    }

    let moved_tile = false

    function move(tiles: number[][], next_available_tile_offset: [number, number], direction: Direction): number[][] {
        // let initial_tiles: number[][] = deep_clone_tiles(tiles)
        let i = get_start_i_index(direction);
        while (check_i_while_condition(direction, i)) {
            let j = get_start_j_index(direction)
            while (check_j_while_condition(direction, j)) {
                let current_tile = tiles[i][j]
                if (current_tile) {
                    tiles = move_tile_to_correct_position(tiles, next_available_tile_offset, direction, i, j)
                }
                direction === Direction.Right ? j-- : j++
            }
            direction === Direction.Down ? i-- : i++
        }

        // if the grid has not changed
        if (moved_tile) {
            tiles = generate_tile(tiles)
            moved_tile = false
        } else if (!moved_tile && check_full(tiles)) {
            alert("You lose!")
        } 
        return tiles
    }

    function get_start_i_index(direction: Direction): number {
        if (direction === Direction.Up) {
            return 1
        } else if (direction === Direction.Down) {
            return 2 
        } else {
            return 0
        }
    }

    function get_start_j_index(direction: Direction): number {
        if (direction === Direction.Left) {
            return 1
        } else if (direction === Direction.Right) {
            return 3
        } else {
            return 0
        }
    }

    function check_i_while_condition(direction: Direction, i: number) {
        return direction === Direction.Down ? i > -1 : i < 4
    }

    function check_j_while_condition(direction: Direction, j: number) {
        return direction === Direction.Right ? j > -1 : j < 4
    }

    function move_tile_to_correct_position(
        tiles: number[][], 
        next_available_tile_offset: [number, number], 
        direction: Direction,
        i: number,
        j: number
    ): number[][] {
        let current_tile = tiles[i][j]
        let next_available_tile = tiles[i+next_available_tile_offset[0]][j+next_available_tile_offset[1]]
        if (next_available_tile === 0) {
            tiles[i+next_available_tile_offset[0]][j+next_available_tile_offset[1]] = current_tile
            tiles[i][j] = 0
            let next_position = get_next_position(i, j, direction)
            if (next_position === null) {
                return tiles
            } else {
                moved_tile = true
                let indexes = next_position as [number, number]
                return move_tile_to_correct_position(tiles, next_available_tile_offset, direction, indexes[0], indexes[1])
            }
        } else if (current_tile === next_available_tile) {
            moved_tile = true
            tiles[i+next_available_tile_offset[0]][j+next_available_tile_offset[1]] += current_tile
            tiles[i][j] = 0
            return tiles
        } else {
            return tiles
        }
    }

    function get_next_position(i: number, j:number, direction: Direction): [number, number] | null {
        if (direction === Direction.Up){
            i -= 1
            if (i === 0) return null
        } else if (direction === Direction.Down){
            i += 1
            if (i === 3) return null
        } else if (direction === Direction.Left) {
            j -= 1
            if (j === 0) return null
        } else if (direction === Direction.Right) {
            j += 1
            if (j === 3) return null
        }

        return [i, j]
    }

</script>
<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" defer>
</svelte:head>



<svelte:window on:keydown={execute_keydown} />

<div class="main">
    <div class="board">
        {#each tiles as row, i}
            <div class="row">
                {#each row as tile, j}
                    <div 
                        class="tile" 
                        class:two={tile === 2}
                        class:four={tile === 4}
                        class:eight={tile === 8}
                        class:sixteen={tile === 16}
                        class:thirty_two={tile === 32}
                        class:sixty_four={tile === 64}
                        class:hundred_twenty_eight={tile === 128}
                        class:two_hundred_fifty_six={tile === 256}
                        class:five_hundred_twelve={tile === 512}
                        class:thousand_twenty_four={tile === 1024}
                        class:two_thousand_forty_eight={tile === 2048}
                    >
                        {#if tile}
                        <div class="number">
                            {tile}
                        </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/each} 
    </div>
</div>

<style> 
    .main {
        height: 100vh; 
        width: 100vw;
    }

    .board {
        position: absolute;
        top: 50%; right: 50%;
        transform: translate(50%,-50%);
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #B9ADA1;
        border-radius: 5px;
        width: 400px;
        height: 400px;
        padding: 10px; 
    }
    .row {
        display: grid;
        flex: 1;
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 10px;
    }

    .tile {
        display: flex;
        border-radius: 5px;
        background-color: #CAC185;
        align-items: center;
        justify-content: center;
    }

    .number {
        color: #756E66;
        font-size: 50px;
        font-weight: bold;
        font-family: Inter;
    }
        
    .two {
        background-color: #EDE0C8;
    }

    .four {
        background-color: #ede0c8;
    }

    .eight {
        background-color: #f2b179;
    }

    .sixteen {
        background-color: #f59563;
    }

    .thirty_two {
        background-color: #f67c60;
    }

    .sixty_four {
        background-color: #f65e3b;
    }

    .hundred_twenty_eight {
        background-color: #edcf73;
    }

    .two_hundred_fifty_six {
        background-color: #edcc62;
    }

    .five_hundred_twelve {
        background-color: #edc850;
    }

    .thousand_twenty_four {
        background-color: #edc53f;
    }

    .two_thousand_forty_eight {
        background-color: #edc53f;
    }
    
</style>