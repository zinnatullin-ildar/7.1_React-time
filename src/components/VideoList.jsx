import Video from './Video';
import { v4 as uuid } from "uuid";

function VideoList(props) {
    return props.list.map(item =>
        <div key={uuid()}
            className="video">
            <Video url={item.url}
                date={item.date} />
        </div>
    );
}

export default VideoList;
