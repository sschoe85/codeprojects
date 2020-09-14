import styled from '@emotion/styled';
import React,{useEffect} from 'react';

const StyledHeader = styled.header`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, rgba(48,59,110,1) 0%, rgba(17,16,0,1) 100%);
  transition: all .7s ease-in;
  margin-bottom: 1rem;
`
const StyledScrolledHeader = styled(StyledHeader)`
position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
  z-index: 999;
  
`


const Header=(props) => {
  const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

if (!scrolled){
   return (
    <StyledHeader>
        <img></img>
    </StyledHeader>
   )
}
else {
    return (
        <StyledScrolledHeader>


        </StyledScrolledHeader>
    )
}
};
export default Header;