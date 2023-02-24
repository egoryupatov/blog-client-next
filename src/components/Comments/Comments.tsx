import Form from "@/components/Comments/Form";

interface CommentsProps {
  totalNumber: number;
}

export default function Comments(props: CommentsProps) {
  return (
    <div className="comments">
      <div className="comments_header">
        {props.totalNumber > 0
          ? `${props.totalNumber} комментария`
          : "Начать дискуссию"}
      </div>
      <Form />
    </div>
  );
}
