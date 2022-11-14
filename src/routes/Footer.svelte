<script type="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<!-- HTML START -->
<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" defer>
</svelte:head>

<div class="content">
    <a rel="noreferrer" href="https://github.com/WukoSiric" target="_blank">
        <div class="button" >     
            <Fa icon={faGithub} size="2x"/>
            <p>WukoSiric</p>
        </div>
    </a>
    <a rel="noreferrer" href="https://www.linkedin.com/in/luke-siric-stainer/" target="_blank">
        <div class="button" >     
            <Fa icon={faLinkedin} size="2x"/>
            <p>LinkedIn</p>
        </div>
    </a>
</div>

<style>
    a, a:visited {
        color: var(--color);
        text-decoration: none;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
        max-width: 200px;
        width: 100%;
        gap: 10px;
        font-family: Inter;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        /* border: 1px solid #fc8e2f; */
    }

    .button:hover {
        transform: scale(1.1);
    }

</style>