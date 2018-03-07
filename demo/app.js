import Router from '../src/index.js';

class Demo {
    constructor() {
        const router = new Router()
            .add(/about/, () => {
                alert('about');
            })
            .add(/test\/{param1}\/{param2}/, (param1, param2) => {
                alert(`received confirmation with params ${param1} and ${param2}`);
            })
            .add(() => {
                alert('home page');
            });

        router.navigate('test/1331/foo');
    }
}

window.demo = new Demo();
