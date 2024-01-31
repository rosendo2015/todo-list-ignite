import styled from 'styled-components'
export const ContainerTasks = styled.div`
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background: ${({theme})=>theme.COLORS.gray_700};
  position: relative;
}
.header img {
  width: 7.875rem;
}
.form {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 672px;
  position: absolute;
  bottom: -1.5rem;
}
.form input {
  color: ${({theme})=>theme.COLORS.gray_100};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
  border: 1px solid ${({theme})=>theme.COLORS.gray_700};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme})=>theme.COLORS.gray_700};
  background: ${({theme})=>theme.COLORS.gray_500};
}
.form input::placeholder {
  color: ${({theme})=>theme.COLORS.gray_300};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.form button {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${({theme})=>theme.COLORS.blue_dark};
  color: ${({theme})=>theme.COLORS.gray_100};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border: none;
  cursor: pointer;
}
.form button:hover {
  background: ${({theme})=>theme.COLORS.blue};
}

.tasks {
  max-width: 672px;
  color: ${({theme})=>theme.COLORS.gray_100};
  margin: auto;
}
.tasks header {
  margin: 4.0625rem 0;
  display: flex;
  justify-content: space-between;
}
.tasksCreated,
.tasksFinished {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tasksCreated p {
  color: ${({theme})=>theme.COLORS.blue};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tasksFinished p {
  color: ${({theme})=>theme.COLORS.purple};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tasksCreated span,
.tasksFinished span {
  color: ${({theme})=>theme.COLORS.gray_200};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background: ${({theme})=>theme.COLORS.gray_400};
}
.tasksList {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  border-top: 1px solid ${({theme})=>theme.COLORS.gray_400};
}
.tasksList img {
  width: 3.5rem;
  height: 3.5rem;
  margin: 4rem auto 1rem;
}
.tasksList strong {
  color: ${({theme})=>theme.COLORS.gray_300};
  font-size: 1rem;
  font-weight: 700;
  line-height: 140%;
}
.tasksList p {
  color: ${({theme})=>theme.COLORS.gray_300};
  font-size: 1rem;
  font-weight: 400;
  line-height: 140%;
}
`