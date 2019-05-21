
import ajax from './ajax'

const prefix = '/api';

export const reqHome = () => ajax('/home');
export const reqcategory = () => ajax('/category');

export const reqpolicydesclist = () => ajax('/policydesclist');

// 识物-Tab 懒数据 ---- http://m.you.163.com/topic/v1/find/getTabs.json
export const reqTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`);

// 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)


// 识物-发现 上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,' +
'5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,' +
'4061,3629,3383') => ajax(`${prefix}/topic/v1/find/recAuto.json`, {page, size, exceptIds})

// 识物-甄选家 顶部数据 ---- http://m.you.163.com/topic/v1/look/getCollection.json?id=6
export const reqColection = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`, {id})


// 识物-甄选家 评价数据 ---- http://m.you.163.com/topic/v1/look/getList.json?id=9&size=2&type=1|2|3
export const reqList = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})
