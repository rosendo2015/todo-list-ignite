import styled from 'styled-components'
export const ContainerTask = styled.div`
.task {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: flex-start;
  align-self: stretch;
  
  border-radius: 8px;
  border: 1px solid ${({theme})=>theme.COLORS.gray_400};
  background: ${({theme})=>theme.COLORS.gray_500};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
}
.wrapperTask {
  display: flex;
  gap: 12px;
}
.task p {
  color: ${({theme})=>theme.COLORS.gra_100};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 
 
}
.wrapperTask button {
  background: none;
  border: none;
}
.check div {
  background: none;
  border: 3px solid ${({theme})=>theme.COLORS.blue};
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
}
.check svg {
  color: ${({theme})=>theme.COLORS.purple};
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.delete {
  background: none;
  border: none;
  color: ${({theme})=>theme.COLORS.gray_100};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 
  cursor: pointer;
}
.delete:hover {
  
  color: ${({theme})=>theme.COLORS.danger};
}
`