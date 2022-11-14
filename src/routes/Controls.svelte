<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
    import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
    import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
    import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
    import { createEventDispatcher } from 'svelte';
    import { Direction } from './types/Direction';
    const dispatch = createEventDispatcher();

    function handleDirection(direction: Direction) {
        if (direction === Direction.Up) {
            dispatch("up")
        } else if (direction === Direction.Down) {
            dispatch("down")
        } else if (direction === Direction.Left) {
            dispatch("left")
        } else if (direction === Direction.Right) {
            dispatch("right")
        }
    }
</script>

<div class="controls">
    <div class="control" on:click={() => handleDirection(Direction.Up)}>
        <Fa icon={faArrowUp} size="3.5x"/>
    </div>
    <div class="control" on:click={() => handleDirection(Direction.Down)}>
        <Fa icon={faArrowDown} size="3.5x"/>
    </div>
    <div class="control" on:click={() => handleDirection(Direction.Left)}>
        <Fa icon={faArrowLeft} size="3.5x"/>
    </div>
    <div class="control" on:click={() => handleDirection(Direction.Right)}>
        <Fa icon={faArrowRight} size="3.5x"/>
    </div>
</div>

<style>
    .controls {
        display: flex;
        gap: 20px;
    }
    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 40px;
        padding: 20px;
        width: 100%;
        border-radius: 20px;
        background-color: #f1b07d;
        color: black;
        border: 5px solid black;
        cursor: pointer;
    }

    .control:active {
        transform: scale(1.1);
        /* transition-timing-function: ease; */
        transition: 0.2s;
    }
</style>