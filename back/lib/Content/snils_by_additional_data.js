const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_snils_by_additional_data:

    function () {

		return path.join (__dirname, '..', 'Static/snils-by-additionalData-1.0.1.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_snils_by_additional_data:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_snils_by_additional_data:

    function () {
    
//    	let {rq: {data}} = this
    	
    	return {
    	
			SnilsByAdditionalDataResponse: {

				FamilyName: "ИВАНОВ",
				FirstName: "ИВАН",
				Patronymic: "ИВАНОВИЧ",
				Snils: "00000601555",
				BirthDate: "1967-05-21",
				Gender: "Male",

				BirthPlace: {
					PlaceType: "ОСОБОЕ",
					Settlement: "ЗАГОРСК",
					District: "ЛЕНИНСКИЙ",
					Region: "МОСКОВСКАЯ ОБЛАСТЬ",
					Country: "РФ",
				},

				PassportRF: {
					Series: "0005",
					Number: "777777",
					IssueDate: "1986-06-13",
					Issuer: "ОВД",
				},

			},

    	}

    },
        
}