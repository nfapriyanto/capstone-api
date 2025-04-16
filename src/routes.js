const {
    registerHandler,
    loginHandler,
    getHomeHandler,
    createSliderHandler,
    updateSliderHandler,
    deleteSliderHandler,
    createArticleHandler,
    updateArticleHandler,
    deleteArticleHandler,
} = require("./handler");

const routes = [
    {
        method: "GET",
        path: "/",
        handler: getHomeHandler,
    },
    {
        method: "POST",
        path: "/register",
        handler: registerHandler,
    },
    {
        method: "POST",
        path: "/login",
        handler: loginHandler,
    },
    {
        method: "POST",
        path: "/sliders",
        options: {
            payload: {
                allow: ['multipart/form-data'],
                multipart: {
                    output: 'stream'
                },
                maxBytes: 1000000 // 1MB
            }
        },
        handler: createSliderHandler,
    },
    {
        method: "PUT",
        path: "/sliders/{id}",
        options: {
            payload: {
                allow: ['multipart/form-data'],
                multipart: {
                    output: 'stream'
                },
                maxBytes: 1000000
            }
        },
        handler: updateSliderHandler,
    },
    {
        method: "DELETE",
        path: "/sliders/{id}",
        handler: deleteSliderHandler,
    },
    {
        method: "POST",
        path: "/articles",
        options: {
            payload: {
                allow: ['multipart/form-data'],
                multipart: {
                    output: 'stream'
                },
                maxBytes: 1000000
            }
        },
        handler: createArticleHandler,
    },
    {
        method: "PUT",
        path: "/articles/{id}",
        options: {
            payload: {
                allow: ['multipart/form-data'],
                multipart: {
                    output: 'stream'
                },
                maxBytes: 1000000
            }
        },
        handler: updateArticleHandler,
    },
    {
        method: "DELETE",
        path: "/articles/{id}",
        handler: deleteArticleHandler,
    },
    {
        method: 'GET',
        path: '/uploads/{param*}',
        handler: {
            directory: {
                path: './src/uploads'
            }
        }
    }
];

module.exports = routes;
