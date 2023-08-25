import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import Pagination from "../templates/Pagination";
import axios from "axios";

const Main = () => {
  // const [post, setPost] = useState([]);
  const [totalPosts, setTotalPosts] = useState(10); // 페이지 당 게시물 수
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * totalPosts; // 첫 게시물의 위치

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  const { data: posts, isLoading } = useQuery("posts", fetchPosts);

  if (isLoading) return null;
  return (
    <Container>
      <Title> Pagination 📎 </Title>
      <select
        value={totalPosts}
        onChange={({ target: { value } }) => setTotalPosts(Number(value))}
      >
        <option value="10">10개씩 보기</option>
        <option value="20">20개씩 보기</option>
        <option value="30">30개씩 보기</option>
      </select>
      <div>
        {posts
          .slice(offset, offset + totalPosts)
          .map(({ id, title, body }: any) => (
            <div key={id}>
              <h3>
                {id}. {title}
              </h3>
              <p>{body}</p>
            </div>
          ))}
      </div>
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
  select {
    margin: 20px auto;
    width: 120px;
    height: 30px;
    padding: 0 7px 0;
    border-radius: 5px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
`;

export default Main;
