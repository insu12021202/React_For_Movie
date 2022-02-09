import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Movies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
`;

const Item = styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Summary = styled.span`
  line-height: 130%;
`;

const MovieImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  height: 50%;
`;
const Title = styled.h2`
  margin: 0;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 24px;
  color: #2c2c2c;
`;

const Year = styled.span`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Genres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
`;

const GenresLi = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader_text = styled.span`
  font-size: 20px;
`;

export {
  Container,
  Movies,
  MovieImg,
  Title,
  Year,
  Summary,
  Genres,
  GenresLi,
  Loader,
  Loader_text,
  Item,
};
