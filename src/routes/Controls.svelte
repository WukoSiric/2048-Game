<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
    import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
    import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
    import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
    import {createEventDispatcher} from 'svelte';
    import { Direction } from './types/Direction';

    const dispatch = createEventDispatcher()

    function trigger_key(direction: Direction) {
        dispatch('key', direction)
        console.log("Dispatched: ",direction)
    }
</script>

<div class="controls">
    <div class="control" on:click={() => trigger_key(Direction.Up)}>
        <Fa icon={faArrowUp} size="3.5x"/>
    </div>
    <div class="control" on:click={() => trigger_key(Direction.Down)}>
        <Fa icon={faArrowDown} size="3.5x"/>
    </div>
    <div class="control" on:click={() => trigger_key(Direction.Left)}>
        <Fa icon={faArrowLeft} size="3.5x"/>
    </div>
    <div class="control" on:click={() => trigger_key(Direction.Right)}>
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