import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";
/*
 У кого проблема с клиентской частью, когда не рендерится страница на этапе создания Роута:
В новых версиях React Router немного изменилась документация. Switch (в файле по пути components/AppRoutes из урока)
заменить на => 'Routes'. Так же 'Components' (в строке Route) заменить на => 'element'.
Эта строка должна выглядеть так: "<Route key={path} path={path} element={<Component/>} exact/>"
Так же для "Redirect". Его в новой версии не импортируем.
Вместо него использовать просто: "<Route path="*" element=(<Shop/>)/>".
Может у кого-то возникла такая же проблема и будет полезно.
*/
//TODO fix routing
const AppRouter = () => {

    const isAuth = true;
    return (
          <Routes>
              {isAuth && authRoutes.map(({path, Component}) =>
                  <Route key={path} path={path} element={Component} />
              )}
              {publicRoutes.map(({path, Component}) =>
                  <Route key={path} path={path} element={Component} />
              )}
              <Route path="*" element={<Shop/>}/>
          </Routes>
    );
};

export default AppRouter;