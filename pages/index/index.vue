<template>
	<view class="page">
<!-- 		<hello-comp myval="hello next~~~"></hello-comp>
		<trailer-stars innerScore="5.1" showNum="1"></trailer-stars> -->
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
						正义联盟正义联盟正义联盟正义联盟正义联盟正义联盟
					</view>
					<trailer-stars innerScore="9.1" showNum="1"></trailer-stars>
					<view class="movie-info">
						2018 / 动作 / 科幻 / 奇幻
					</view>
					<view class="movie-info">
						 本·阿弗莱克 / 亨利·卡维尔 / 盖尔·加朵 / 埃兹拉·米勒 / 杰森·莫玛
					</view>
				</view>
				<view class="movie-oper">
					<image src="../../static/icons/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞一下
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
			}
		},
		onLoad() {
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
