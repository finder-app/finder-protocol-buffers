# 今後やりたいこと
# docker環境でファイルを生成したい
# shell scriptにしたいかも。
# 理由=>1．commitに日付を含められそう。2．go-pbgenでフォルダ内の配列を更新せず全件取得したいので

# e.g. make pbgen
# submodulesの.protoファイルうざいけど、手動で削除しよかな？
pbgen:
	make go-pbgen
	make ts-pbgen
	git add .
	git commit -m "pbgen ${date "+%Y-%m-%d %H:%M:%S"}"
	git push origin master
	(cd ../finder-frontend && \
	git submodule update --remote)
	(cd ../finder-backend && \
	git submodule update --remote)

# 使用方法: 全件指定ができないので、.protoファイルを書き足していく。自動化できたら良い
# ファイル名を全件取得➡️「各model名.proto」の形式でコマンドを実行させる
go-pbgen:
	protoc -I ./protofiles \
	--go_out=plugins=grpc:./ \
	foot_print.proto \
	like.proto \
	message.proto \
	profile.proto \
	room.proto \
	user.proto

# protoc -I ./protofiles ${s}.proto --go_out=plugins=grpc:./

# js_outを消すと挙動変わるかも。要検証
ts-pbgen:
	yarn grpc_tools_node_protoc -I ./protofiles \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--grpc_out=grpc_js:./ts \
	--ts_out=service=grpc-node,mode=grpc-js:./ts ./protofiles/*.proto