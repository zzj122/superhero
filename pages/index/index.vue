<template>
	<view class="page">
<!-- 		<helloComp myval="hello next~~~"></helloComp>
		<trailerStars innerScore="5.1" showNum="1"></trailerStars> -->
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true" class="circular">
			<swiper-item>
				<image src="../../static/carousel/e5a517d7a444a0d96a73ac1895d786fe.jpg" class="circular"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/e990e2c413afb92862024dc487030049.jpg" class="circular"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/65a3aa5084c7eacada1c41dd2bc3ae1e.jpg" class="circular"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/8512f2d12c8a0f547e9a2acd2915009a.jpg" class="circular"></image>
			</swiper-item>
		</swiper>
		<!-- 热门 -->
		<view class="page-block hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/fire.png" class="hot-icon"></image>
				<view class="hot-title">
					热门
				</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="page-block conter">
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/6620453c0a39128e1f689cde7d8981d1.jpg" class="poster"></image>
					<view class="movie-name">
						三少爷的剑
					</view>
					<trailer-stars innerScore="4.7" showNum="1"></trailer-stars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/97e7f5ac345fd024f1c562390113e7c1.jpg" class="poster"></image>
					<view class="movie-name">
						深海食人鲨
					</view>
					<trailer-stars innerScore="6.6" showNum="1"></trailer-stars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/0f7c1b3aefd51f39636464a8b4297bc6.jpg" class="poster"></image>
					<view class="movie-name">
						洋葱头历险记
					</view>
					<trailer-stars innerScore="8.9" showNum="1"></trailer-stars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/4963bf993ac3693f98f8a229cce36425.jpg" class="poster"></image>
					<view class="movie-name">
						美女与野兽
					</view>
					<trailer-stars innerScore="8.2" showNum="1"></trailer-stars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/eb515c45383e022e3a638c8ab515497b.jpg" class="poster"></image>
					<view class="movie-name">
						大师的寂寞
					</view>
					<trailer-stars innerScore="5.6" showNum="1"></trailer-stars>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/ffdca86868a3833ce5274a9c188605c1.jpg" class="poster"></image>
					<view class="movie-name">
						总有一次哭泣让你瞬间长大
					</view>
					<trailer-stars innerScore="7.3" showNum="1"></trailer-stars>
				</view>
			</view>
		</scroll-view>
		
		
		<!-- 猜你喜欢 -->
		<view class="page-block hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/guess-u-like.png" class="hot-icon"></image>
				<view class="hot-title">
					猜你喜欢
				</view>
			</view>
		</view>
		
		<view class="page-block guess-u-like">
			
			<view class="single-like-movie">
				<image src="../../static/poster/justice.png" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						正义联盟
					</view>
					<trailer-stars innerScore="9.1" showNum="1"></trailer-stars>
					<view class="movie-info">
						2018 / 动作 / 科幻 / 奇幻
					</view>
					<view class="movie-info">
						上映日期 : 2017-11-17(美国/中国大陆)
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe(0)">
					<image src="../../static/icons/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞一下
					</view>
					<view :animation="animationDataArr[0]" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
			<view class="single-like-movie">
				<image src="../../static/poster/civilwar.jpg" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">
						美国队长3
					</view>
					<trailer-stars innerScore="9.1" showNum="1"></trailer-stars>
					<view class="movie-info">
						2018 / 动作 / 科幻 / 冒险
					</view>
					<view class="movie-info">
						上映日期 : 2016-05-06(中国大陆/美国) / 2016-04-12(加州首映)
					</view>
				</view>
				<view class="movie-oper" @click="praiseMe(1)">
					<image src="../../static/icons/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞一下
					</view>
					<view :animation="animationDataArr[1]" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import helloComp from "../../components/helloComp.vue"
	import trailerStars from "../../components/trailerStars"
	
	export default {
		data() {
			return {
				animationData: {},
				animationDataArr: [
					{}, {}, {}, {}
				]
			}
		},
		onUnload() {
			//页面卸载的时候  清除动画数据
			this.animationData = {},
			this.animationDataArr = [ {}, {}, {}, {}]
		},
		onLoad() {
			
			// #ifdef APP-PLUS || MP-WEIXIN
			//在页面创建的时候，创建一个临时动画
			this.animation = uni.createAnimation()
			//#endif
			
			//获取后端数据
			uni.request({
			    url: 'https://www.imovietrailer.com/superhero/index/carousel/list',
				method: "POST",
			    success: (res) => {
			        console.log(res.data);
			        this.text = 'request success';
			    }
			});
		},
		methods: {
			//实现点赞动画效果
			praiseMe(e) {
				
				// #ifdef APP-PLUS || MP-WEIXIN
				
				//构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-65).opacity(1).step({
					duration:400
					});
				this.animationData = this.animation;
				this.animationDataArr[e] = this.animationData.export();
				
				//还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation
					this.animationDataArr[e] = this.animationData.export();
				}.bind(this), 500);
				
				//#endif
			}
		},
		components: {
			helloComp,
			trailerStars
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
