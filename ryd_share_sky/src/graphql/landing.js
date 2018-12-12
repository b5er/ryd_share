import gql from 'graphql-tag'

export const SHOW_AUTH = gql`
	mutation toggleAuth($showAuth: Boolean!, $type: String!) {
		toggleAuth(showAuth: $showAuth, type: $type) @client
	}
`

export const GET_AUTH = gql`
	{
		showAuth @client {
			showAuth
			type
		}
	}
`

export const SHOW_ITEM = gql`
	mutation toggleItem($showItem: String!) {
		toggleItem(showItem: $showItem) @client
	}
`

export const GET_ITEM = gql`
	{
		showItem @client
	}
`
