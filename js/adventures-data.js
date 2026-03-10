/**
 * Adventure data — media lives in adventures/<slug>/<date-folder>/ (e.g. adventures/coulson-tough/3-8-2026/).
 *
 * For each adventure:
 * - slug: URL identifier (lowercase, no spaces). Folder name is the slug with hyphens (e.g. coulson-tough).
 * - image: cover image for the list card; use images/adventure-images/<name>.png (optional).
 * - dates: array of outings. Each has:
 *   - date: folder name (e.g. '3-8-2026').
 *   - label: display label (e.g. 'March 8, 2026').
 *   - photos: array of image paths under adventures/<slug>/<date>/.
 *   - videos: array of video paths under adventures/<slug>/<date>/.
 */
window.ADVENTURES_DATA = [
    {
        slug: 'coulsontough',
        name: 'Coulson Tough',
        description: 'Jumping the Fence of Coulson Tough.',
        image: 'images/adventure-images/coulson-tough.png',
        dates: [
            {
                date: '10-5-2026',
                label: 'October 5, 2026',
                photos: [],
                videos: [
                    'adventures/coulson-tough/10-5-2026/map-recording.mov'
                ]
            }
        ]
    },
    {
        slug: 'deretchin',
        name: 'Deretchin',
        description: 'Jumping the Fence of Deretchin.',
        image: 'images/adventure-images/deretchin.png',
        dates: [
            {
                date: '3-8-2026',
                label: 'March 8, 2026',
                photos: [],
                videos: [
                    'adventures/deretchin/3-8-2026/IMG_6321.mov',
                    'adventures/deretchin/3-8-2026/IMG_6322.mov',
                    'adventures/deretchin/3-8-2026/IMG_6323.mov',
                    'adventures/deretchin/3-8-2026/IMG_6325.mov',
                    'adventures/deretchin/3-8-2026/IMG_6326.mov',
                    'adventures/deretchin/3-8-2026/IMG_6327.mov',
                    'adventures/deretchin/3-8-2026/IMG_6328.mov'
                ]
            }
        ]
    },
    {
        slug: 'example',
        name: '',
        description: '',
        image: '',
        dates: []
    },
    {
        slug: 'example-2',
        name: '',
        description: '',
        image: '',
        dates: []
    }
];
