import routesConfig from  '~/config/route'
import { HeaderOnly } from "~/components/Layouts";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.search, component: Search, layout: null},
    
];//ko cần đăng nhập vẫn xem dc trang

const privateRoutes = [];//đăng nhập mới xem dc trang

export { privateRoutes, publicRoutes };
