import styled from "styled-components";
import Tag from "../components/Tag";

interface Props {
  tags: string[],
}

const TagContainer = (props: Props) => {

  const { tags } = props;

  return (
    <Wrapper>
      {tags.map((tag) => (
        <Tag 
          key={tag}
          label={tag}
        />
      ))}
    </Wrapper>
  );
}

export default TagContainer;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;

  margin-bottom: 16px;
`;