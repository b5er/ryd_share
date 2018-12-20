import gql from 'graphql-tag'

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

export const GET_VEHICLES = gql`
	{
		availableCars @client
	}
`

export const ADD_VEHICLES = gql`
	mutation availableCars($vehicles: String!) {
		availableCars(vehicles: $vehicles) @client
	}
`
