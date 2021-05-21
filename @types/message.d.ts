//import * as AssetDB from './packages/asset-db/@types/message';
import * as Scene from './packages/scene/@types/message';
import * as Engine from './packages/engine/@types/message';
import * as Builder from './packages/builder/@types/public/message';
// import * as Extension from './packages/extension/@types/message';

declare global {
    interface EditorMessageContent {
        params: any[],
        result: any;
    }

    interface EditorMessageMap {
        [x: string]: EditorMessageContent;
    }

    /**
     * 这种方式总有一天要去除，全部更改为显式声明，利用声明合并的特性，给予开发者最好的提示
     */
    interface EditorMessageMaps {
    [x: string]: EditorMessageMap;
        //'asset-db': AssetDB.message;
        'scene': Scene.message;
        'engine': Engine.message;
        'builder': Builder.message;
        // 'extension': Extension.message;
    }
}
