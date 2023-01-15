import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './index';

function Videos({ videos, direction }) {
    if(!videos?.length) return 'loading...';

    const videosRendered = videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.videoId && <VideoCard video={item} />}
        </Box> 
    ));

    return(
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="flex-start" alignItems="start" gap={2}>
            {videosRendered}
        </Stack>
    );
}

export default Videos;