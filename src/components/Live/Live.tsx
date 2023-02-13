import LiveComment from "@/components/Live/LiveComment";
import { ILiveComment } from "@/types/liveComment.type";

interface LiveProps {
  liveComments: ILiveComment[];
}

export default function Live(props: LiveProps) {
  return (
    <div className="live">
      <div className="live_title">Сейчас обсуждают</div>
      <div className="live_comments">
        {props.liveComments.map((liveComment: ILiveComment) => (
          <LiveComment key={liveComment.id} liveComment={liveComment} />
        ))}
      </div>
    </div>
  );
}
