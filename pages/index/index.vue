<template>
	<view class="page">
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
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/97e7f5ac345fd024f1c562390113e7c1.jpg" class="poster"></image>
					<view class="movie-name">
						深海食人鲨
					</view>
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							8.9
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/0f7c1b3aefd51f39636464a8b4297bc6.jpg" class="poster"></image>
					<view class="movie-name">
						洋葱头历险记
					</view>
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							9.3
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/4963bf993ac3693f98f8a229cce36425.jpg" class="poster"></image>
					<view class="movie-name">
						美女与野兽
					</view>
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							8.6
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/eb515c45383e022e3a638c8ab515497b.jpg" class="poster"></image>
					<view class="movie-name">
						大师的寂寞
					</view>
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							9.0
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-item">
					<image src="../../static/poster/ffdca86868a3833ce5274a9c188605c1.jpg" class="poster"></image>
					<view class="movie-name">
						总有一次哭泣让你瞬间长大
					</view>
					<view class="movie-score-wapper">
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-yellow.png" class="star-ico"></image>
						<image src="../../static/icons/Star-huise.png" class="star-ico"></image>
						<view class="movie-score">
							9.4
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
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

		}
	}
</script>

<style>
	@import url("./index.css");
</style>
