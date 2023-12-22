export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: red;
  }
`;