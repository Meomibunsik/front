import * as S from "./styled";
import { useRouter } from "next/router";
import { MainPageProps } from "../../types";
import { categoryArray } from "../../Utils/categoryArray";

const Contant = ({id,title,category,date,type}:MainPageProps) => {
  const router = useRouter();
  const categoryFullName = categoryArray.filter((i) => i.value === category)[0] || ""
  console.log(categoryFullName.fullname);

    return (
    <S.Contant onClick={() => router.push(`study/${id}`)}>
      <S.ContantTop>
        <p>{title}</p>
        <S.ConferenceText>{type === "컴퍼런스" ? "conference" : type === "스터디" ? "study" : type}</S.ConferenceText>
      </S.ContantTop>
      <S.ContantBottom>
        <S.Topic>{category}</S.Topic>
        <S.Date>{date}</S.Date>
      </S.ContantBottom>
    </S.Contant>
    )
}

  export default Contant