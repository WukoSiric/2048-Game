<script lang="ts">
    export let message: string = "default value" //Can be overwritten
    export let show_modal: boolean = false
</script>

<div class="modal" style="display: {!show_modal ? "none" : "inline"}">
    <div class="modal-content">
        <h1>{message}</h1>
        <button class="restart" on:click>Restart</button>
    </div>
</div>

<style>
    .modal {
        /* visibility: hidden; */
        position: fixed;
        z-index: 1;
        left: 0; 
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; 
        background-color: rgba(61, 61, 61, 0.5);
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Inter;
        background-color: #f4f4f4; 
        border-radius: 20px;
        margin: 20% auto; 
        padding: 30px; 
        width: 40%;
        box-shadow: 0 5px 8px rgba(0,0,0,0.2);
    }

    .restart {
        font-family: Inter;
        font-size: 1.2rem;
        font-weight: 500;
        background-color: #fc8e2f;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
</style>