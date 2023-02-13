import Image from "next/image";

export default function Item(props: any) {
  return (
    <div className="news_item">
      <div className="news_item_title">{props.post.title}</div>
      <div className="news_item_comments">
        <div className="news_item_comments_icon">
          <Image
            src={"/comment.svg"}
            width={"16"}
            height={"16"}
            alt={"comments"}
          />
        </div>
        <div className="news_item_comments_number">
          {props.post.comments.length}
        </div>
      </div>
    </div>
  );
}
