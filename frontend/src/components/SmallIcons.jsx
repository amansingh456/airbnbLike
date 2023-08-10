import {styled} from "styled-components"
const SmallIcons = () => {
  return (
    <div>
      <MainDiv className="hotelsAllData">
         <Img  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"/>
         <Img src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"/>
         <Img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"/>
         <Img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"/>
         <Img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"/>
         <Img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"/>
         <Img src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"/>
         <Img src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"/>
         <Img src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"/>
         <Img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"/>
         <Img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"/>
         <Img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"/>
         <Img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"/>
      </MainDiv>
      <Div/>
    </div>
  )
}

export default SmallIcons

const Div = styled.div`
   margin-bottom: 50px;
   display: none;
   @media screen and (min-width: 300px) and (max-width:999px){
      display: flex;
    }
`

const MainDiv = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-top: 110px;
   margin-bottom: -20px;
   margin-left: 50px;
   margin-right: 50px;
   padding: 18px;
   border-radius: 10px;
    @media screen and (min-width: 300px) and (max-width:900px){
      display: none;
    }
`
const Img = styled.img`
   width: 25px;
   height: 30px;
   cursor: pointer;
   transition: all .6s ease-in-out;
   &:hover{
      transform: scale(1.6);
   }
`