# tsprimer

typescriptの練習に、jsprimer( https://jsprimer.net/use-case/todoapp/final/ )のtodoアプリをjavascriptからtypescriptに移植してみた。

元々コメント文でparamとreturnの型が定義されていたおかげで困ることはほとんど無かったが、todoItemViewとtodoItemListのidプロパティの表記が間違っている？（他の箇所ではnumber型と書かれているが、string型になっていた）

javascriptで写経していたときはバグ取りが困難だったが、typescriptに移植したときはバグが全く無かったのでかなり気に入った（そのかわり、typescriptに慣れていないせいで無名関数を渡すときの型定義に苦労した）。

最後のリファクタリングだけ出来ていないが、そのうちやりたい。
