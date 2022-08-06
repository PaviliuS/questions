import QuestionsContainer from './components/Questions/QuestionsContainer';
import CollectionsContainer from './components/Collections/CollectionsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as Style from './Style'
import { lightTheme, darkTheme } from './theme/theme';
import { ruLang, enLang } from './lang/lang';
import { useState } from 'react';
import { GlobalStyle } from './theme/theme';
import StartCollectionsContainer from './components/StartCollections/StartCollectionsContainer';
import StartCollectionContainer from './components/StartCollection/StartCollectionContainer';
import FooterContainer from './components/Footer/FooterContainer';
import { LangContext } from './lang/lang';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ru");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const switchLang = () => {
    lang === "ru" ? setLang("en") : setLang("ru");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
      <LangContext.Provider value={[lang === "ru" ? ruLang : enLang, switchLang]}>
        <GlobalStyle ></GlobalStyle>
        <Style.App>
          <Style.Content>
            <HeaderContainer switchTheme={switchTheme} />

            <Style.Route>
              <Routes>
                <Route path='' element={<StartCollectionsContainer></StartCollectionsContainer>}></Route>
                <Route path='/questions/' element={<QuestionsContainer></QuestionsContainer>}></Route>
                <Route path='/collections/' element={<CollectionsContainer></CollectionsContainer>}></Route>
                <Route path='/start/' element={<StartCollectionsContainer></StartCollectionsContainer>}></Route>
                <Route path={`/start/:id`} element={<StartCollectionContainer></StartCollectionContainer>}></Route>
              </Routes>
            </Style.Route>

            <FooterContainer />
          </Style.Content>
        </Style.App>
      </LangContext.Provider>
    </ThemeProvider >
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

