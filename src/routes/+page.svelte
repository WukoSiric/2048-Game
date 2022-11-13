<script lang="ts">
    import Modal from './Modal.svelte';
    import Board from './Board.svelte';
    import Footer from './Footer.svelte';

    let board: Board
    let tiles: number[][]
    let has_lost: boolean
    let has_won: boolean
</script>

<!-- HTML START -->
<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" defer>
    <link rel="stylesheet" href="../global.css" defer>
</svelte:head>

<!-- DEBUGGING -->
<!-- <button on:click={board.fill_all}>Put near finish</button> -->
<Modal message="Out of moves!" show_modal={has_lost} on:click={() => board.start_game(tiles)}/>
<Modal message="Nice job!" show_modal={has_won} on:click={() => board.start_game(tiles)}/>

<div class="content">
    <div class="header">
        <h1>2048 Clone</h1> 
        <p>2048 is a single-player sliding tile puzzle video game written by Italian web developer Gabriele Cirulli and published on GitHub.</p>
    </div>
    <Board bind:tiles bind:has_lost bind:has_won bind:this={board}/>
    <Footer />
</div>

<!-- STYLE -->
<style> 
    :global(body) {
        padding: 0;
        border: 0;
        margin: 0;
    }

    :global(h1) {
        margin: 0;
        padding: 0;
    }

    :global(p) {
        margin: 0;
        padding: 0;
    }

    .content {
        position: absolute;
        top: 50%;
        transform: translate(50%, -55%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        font-family: Inter;
        gap: 50px;
    }

    .header h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 4em;
    }
</style>