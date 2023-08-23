import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../templates/Pagination";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * totalPosts;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container>
      <Title> Pagenation 📎 </Title>
      <SortWrap>
        <select
          value={totalPosts}
          onChange={({ target: { value } }) => setTotalPosts(Number(value))}
        >
          <option value="10">10개씩 보기</option>
          <option value="20">20개씩 보기</option>
          <option value="30">30개씩 보기</option>
        </select>
      </SortWrap>
      <Data>
        {posts.slice(offset, offset + totalPosts).map(({ id, title, body }) => (
          <List key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </List>
        ))}
      </Data>
      <Pagination
        total={posts.length}
        totalPosts={totalPosts}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 50px;
`;
const SortWrap = styled.div`
  margin: 20px auto;
  select {
    width: 120px;
    height: 30px;
    padding: 0 7px 0;
    border-radius: 5px;
  }
`;
const Data = styled.div``;
const List = styled.div``;

export default Main;
