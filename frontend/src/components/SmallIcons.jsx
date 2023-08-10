import styled from "styled-components"
const SmallIcons = () => {
  return (
    <div>
      <MainDiv>
         <Img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="a" />
         <Img src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="a" />
      </MainDiv>
      <Div/>
    </div>
  )
}

export default SmallIcons

const Div = styled.div`
   display: none;
   margin-top: 80px;
   @media screen and (min-width:300px) and (max-width:999px){
      display: flex;
   }

`

const MainDiv  = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-left: 40px;
   margin-right: 40px;
   padding: 14px;
   border-radius: 10px;
   margin-top: 100px;
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;

   @media screen and (min-width:300px) and (max-width:999px){
      display: none;
   }

`
const Img = styled.img`
   width: 25px;
   height: 30px;
`
