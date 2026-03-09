/**
 * Adventure data — media lives in adventures/<slug>/<date-folder>/ (e.g. adventures/coulson-tough/3-8-2026/).
 *
 * For each adventure:
 * - slug: URL identifier (lowercase, no spaces). Folder name is the slug with hyphens (e.g. coulson-tough).
 * - image: cover image for the list card (optional).
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
        image: '',
        dates: [
            {
                date: '3-8-2026',
                label: 'March 8, 2026',
                photos: [],
                videos: [
                    'adventures/coulson-tough/3-8-2026/IMG_6321.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6322.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6323.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6325.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6326.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6327.mov',
                    'adventures/coulson-tough/3-8-2026/IMG_6328.mov'
                ]
            }
        ]
    },
    {
        slug: 'deretchin',
        name: 'Deretchin',
        description: 'Jumping the Fence of Deretchin.',
        image: '',
        dates: []
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
