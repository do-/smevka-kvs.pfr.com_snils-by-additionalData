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

    	const {rq: {data}} = this

    	let Snils = '', sum = 0; for (let i = 9; i > 0; i --) {
    	
    		const d = Math.floor (Math.random () * 10)
    		
    		Snils += d
    		
    		sum += i * d
    	
    	}
    	
    	Snils += String ((sum % 101) % 100).padStart (2, '0')
    
    	return {SnilsByAdditionalDataResponse: {...data, Snils}}

    },
        
}