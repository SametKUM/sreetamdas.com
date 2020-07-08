import styled from "styled-components";

export const BlogPostsPreviewLayout = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

export const Layout = styled.div`
	max-width: 600px;
	width: 100%;
`;

export const Center = styled.div`
	display: grid;
	padding: 0 20px;
	justify-items: center;
`;

export const MDXText = styled.div`
	line-height: 1.4;
	margin: 0; /* thanks @mxstbr! */
	padding: 15px 0;
`;

export const RemoveBulletsFromOL = styled.div`
	& ul {
		list-style: none;
		padding-left: 30px;
	}
	& ul li {
		padding: 5px;
	}
`;

export const PaddingListItems = styled.div`
	& ul li {
		padding: 5px;
	}
`;

export const ReallyBigTitle = styled.h1`
	font-size: 10rem;
`;