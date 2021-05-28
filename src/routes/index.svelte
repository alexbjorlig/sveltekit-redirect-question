<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    // Actions is our default page, thus we redirect requests for / -> /actions
    export const load: Load = async ({ page, fetch, session, context }) => {
        return {
            status: 302,
            redirect: '/actions',
        };
    };
</script>



<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
