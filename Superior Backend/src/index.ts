import {app_complete} from './Routes';

Bun.serve(
    {
        development: true,
        port:3000,
        hostname:"0.0.0.0",
        fetch: app_complete.fetch
    }
)
