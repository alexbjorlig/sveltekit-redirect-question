


<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ page, fetch, session, context }) => {
        console.log('Why is this printed when going to an unkown route???');
        return {
            status: 302,
            redirect: `/login`
        }
    };
</script>



<main style="background-color: lightblue">
    <slot />
</main>