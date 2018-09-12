const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

const jsdom = require('jsdom');
const win = new jsdom.JSDOM('<!doctype html><html><body></body></html>').window;
const doc = win.document;
global.window = win;
global.navigator = window.navigator;
global.document = doc;
