import styled from "styled-components";

const Pagination = ({ total, totalPosts, page, setPage }: any) => {
  const numPages = Math.ceil(total / totalPosts);

  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        {"<"}
      </Button>
      {Array(numPages)
        .fill(1)
        .map((_, i) => (
          <Button key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        {">"}
      </Button>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
`;

export default Pagination;
