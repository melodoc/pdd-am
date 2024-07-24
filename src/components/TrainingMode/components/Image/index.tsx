import React from "react";

type TProps = {
    imageUrl: string | undefined;
};

const QuestionImage = React.memo<Readonly<TProps>>(({ imageUrl } : TProps) => (
  imageUrl && (
  <img
    src={imageUrl}
    alt="Картинка вопроса"
    style={{
      maxWidth: "700px",
      width: "100%",
      height: "auto",
      maxHeight: "270px",
      overflow: "hidden",
      objectFit: "contain",
      objectPosition: "center",
      marginBottom: "32px",
    }}
  />
  )
));

export default QuestionImage;
