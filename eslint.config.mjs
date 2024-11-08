import cdsPlugin from '@sap/eslint-plugin-cds'
import cds from '@sap/cds/eslint.config.mjs'

export default [ 
    cdsPlugin.configs.recommended,
     ...cds.recommended,
     {
        plugins: {
            cdsPlugin
        },
        rules: {
            "cdsPlugin/no-db-keywords": ["error", "show"],
            "cdsPlugin/no-dollar-prefixed-names": ["error", "show"],
            "cdsPlugin/no-join-on-draft": ["error", "show"],
            "cdsPlugin/sql-cast-suggestion": ["warn", "show"],
            "cdsPlugin/start-elements-lowercase": ["error", "show"],
            "cdsPlugin/start-entities-uppercase": ["error", "show"],
            "cdsPlugin/valid-csv-header": ["error", "show"],
        }
    }
 ]
