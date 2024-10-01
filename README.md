# qtpc-website
Website for @QuanTrieuPCYT

For custom route, edit `/resources/routes.ts`
```js
const routes: Route[] = [
    {
        path: 'your-route',
        url: 'your-url',
        permanent: true, // For 301 status code
    },
    {
        path: 'your-route-2',
        asset: 'your-file.png' // /public folder
    },
]
```

Post template
```md
---
title: Post title
excerpt: Post excerpt
coverImage: /cover.png # /public folder
date: 0 # UNIX timestamp in seconds
author:
  name: User
  url: https://domain.tld/user
ogImage:
  url: /cover.png
---

<Post details>
```

Device template
```md
---
name: Device name
image: /device-image.png # /public folder
---

<Device details>
```

## To do
[] Website metadata
[] Posts checking tool
[] [Interactive terminal](https://lt.id.vn)