import { useRef, useEffect, useState,  } from "react";
import styled from "styled-components";
import { BODY2, GRAY, PRIMARY, SUBTITLE, TITLE } from "../styles";
import Tag from "./Tag";
import { css } from "styled-components";
import ViewMoreContainer from "../containers/ViewMoreContainer";
import TagContainer from "../containers/TagContainer";

interface Props {
  productName: string,
  price: number,
  image: string,
  tags: string[],
  description: string
}

const ProductDetail = (props: Props) => {

  const {productName, price, image, tags, description} = props;
  const KRW = Intl.NumberFormat().format(price);

  const [viewMoreValue, setViewMoreValue] = useState<"펼쳐보기" | "접기">("펼쳐보기");
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    setViewMoreValue((prev) => prev === "펼쳐보기" ? "접기" : "펼쳐보기");
  }
  
  useEffect(() => {
    if(!ref.current) return;

    const target = ref.current;
    if (target.offsetHeight < target.scrollHeight){
      setIsEllipsis(true);
    } 
  }, []);

  return (
    <Wrapper>
      <Img 
        src={image} 
        alt={productName}
      />
      <Name>{productName}</Name>
      <Price>{`${KRW}원`}</Price>
      <TagContainer tags={tags}/>
      <Description 
        viewMoreValue={viewMoreValue} 
        ref={ref}
      >
        {description}
      </Description>
      {isEllipsis && (
        <ViewMoreContainer 
          onClick={handleClick}
          label={viewMoreValue}
        />
      )}
    </Wrapper>
  );
}

export default ProductDetail;

const Wrapper = styled.div`
  background: #FFF;

  display: flex;
  flex-direction: column;

  padding: 32px;
  margin: 0 auto;

  width: 384px;
  height: max-content;

  border-radius: 16px;
`;

const Img = styled.img`
  width: 320px;
  height: 320px;

  border-radius: 8px;

  margin-bottom: 16px;
`;

const Name = styled.p`
  ${TITLE};
  
  margin-bottom: 8px;
`;

const Price = styled.p`
  ${SUBTITLE};
  color: ${PRIMARY};

  margin-bottom: 12px;
`;



const Description = styled.p<{viewMoreValue: string}>`
  ${BODY2};

  ${({viewMoreValue}) => viewMoreValue === "펼쳐보기" && css`
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;