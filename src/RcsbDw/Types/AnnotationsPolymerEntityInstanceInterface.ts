/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EntityAnnotations {
  annotations_polymer_entity_instance_container_identifiers: {
    /**
     * Entity identifier for the container.
     */
    entity_id?: string;
    /**
     * Entry identifier for the container.
     */
    entry_id?: string;
    /**
     * Asymmetric chain identifier for the container.
     */
    asym_id?: string;
  };
  annotations?: [
    {
      /**
       * A description for the feature.
       */
      description?: string;
      /**
       * An identifier for the feature.
       */
      feature_id?: string;
      /**
       * A name for the feature.
       */
      name?: string;
      /**
       * A name for the provenance source.
       */
      provenance_source?: string;
      /**
       * The connection type.
       */
      type?:
        | "ASA"
        | "ASA_UNBOUND"
        | "ASA_BOUND"
        | "ACTIVE_SITE"
        | "BINDING_SITE"
        | "CALCIUM_BINDING_REGION"
        | "CHAIN"
        | "COMPOSITIONALLY_BIASED_REGION"
        | "CROSS_LINK"
        | "DNA_BINDING_REGION"
        | "DOMAIN"
        | "GLYCOSYLATION_SITE"
        | "INITIATOR_METHIONINE"
        | "LIPID_MOIETY_BINDING_REGION"
        | "METAL_ION_BINDING_SITE"
        | "MODIFIED_RESIDUE"
        | "MUTAGENESIS_SITE"
        | "NON_CONSECUTIVE_RESIDUES"
        | "NON_TERMINAL_RESIDUE"
        | "NUCLEOTIDE_PHOSPHATE_BINDING_REGION"
        | "PEPTIDE"
        | "PROPEPTIDE"
        | "REGION_OF_INTEREST"
        | "REPEAT"
        | "NON_STANDARD_AMINO_ACID"
        | "SEQUENCE_CONFLICT"
        | "SEQUENCE_VARIANT"
        | "SHORT_SEQUENCE_MOTIF"
        | "SIGNAL_PEPTIDE"
        | "SITE"
        | "SPLICE_VARIANT"
        | "TOPOLOGICAL_DOMAIN"
        | "TRANSIT_PEPTIDE"
        | "TRANSMEMBRANE_REGION"
        | "UNSURE_RESIDUE"
        | "ZINC_FINGER_REGION"
        | "INTRAMEMBRANE_REGION"
        | "hydropathy"
        | "disorder"
        | "disorder_binding"
        | "CARD_MODEL"
        | "IMGT_ANTIBODY_DESCRIPTION"
        | "IMGT_ANTIBODY_DOMAIN_NAME"
        | "IMGT_ANTIBODY_GENE_ALLELE_NAME"
        | "IMGT_ANTIBODY_ORGANISM_NAME"
        | "IMGT_ANTIBODY_PROTEIN_NAME"
        | "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION"
        | "IMGT_ANTIBODY_RECEPTOR_TYPE"
        | "Pfam"
        | "SABDAB_ANTIBODY_ANTIGEN_NAME"
        | "SABDAB_ANTIBODY_NAME"
        | "SABDAB_ANTIBODY_TARGET"
        | "artifact"
        | "modified_monomer"
        | "mutation"
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BOND_OUTLIER"
        | "C-MANNOSYLATION_SITE"
        | "CATH"
        | "CIS-PEPTIDE"
        | "ECOD"
        | "HELIX_P"
        | "HELX_LH_PP_P"
        | "HELX_RH_3T_P"
        | "HELX_RH_AL_P"
        | "HELX_RH_PI_P"
        | "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY"
        | "MA_QA_METRIC_LOCAL_TYPE_DISTANCE"
        | "MA_QA_METRIC_LOCAL_TYPE_ENERGY"
        | "MA_QA_METRIC_LOCAL_TYPE_IPTM"
        | "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE"
        | "MA_QA_METRIC_LOCAL_TYPE_OTHER"
        | "MA_QA_METRIC_LOCAL_TYPE_PAE"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1]"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1]"
        | "MA_QA_METRIC_LOCAL_TYPE_PTM"
        | "MA_QA_METRIC_LOCAL_TYPE_ZSCORE"
        | "MEMBRANE_SEGMENT"
        | "MOGUL_ANGLE_OUTLIER"
        | "MOGUL_BOND_OUTLIER"
        | "N-GLYCOSYLATION_SITE"
        | "O-GLYCOSYLATION_SITE"
        | "RAMACHANDRAN_OUTLIER"
        | "ROTAMER_OUTLIER"
        | "RSCC_OUTLIER"
        | "RSRZ_OUTLIER"
        | "S-GLYCOSYLATION_SITE"
        | "SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS"
        | "SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS"
        | "SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE"
        | "SCOP"
        | "SCOP2B_SUPERFAMILY"
        | "SCOP2_FAMILY"
        | "SCOP2_SUPERFAMILY"
        | "SHEET"
        | "STEREO_OUTLIER"
        | "STRN"
        | "TURN_TY1_P"
        | "UNASSIGNED_SEC_STRUCT"
        | "UNOBSERVED_ATOM_XYZ"
        | "UNOBSERVED_RESIDUE_XYZ"
        | "ZERO_OCCUPANCY_ATOM_XYZ"
        | "ZERO_OCCUPANCY_RESIDUE_XYZ"
        | "covalent bond"
        | "covalent modification of a nucleotide base"
        | "covalent modification of a nucleotide phosphate"
        | "covalent modification of a nucleotide sugar"
        | "covalent residue modification"
        | "disulfide bridge"
        | "hydrogen bond"
        | "ionic interaction"
        | "metal coordination"
        | "mismatched base pairs";
      /**
       * The value for the feature.
       */
      value?: number;
      additional_properties?: {
        /**
         * The additional property name.
         */
        property_name?:
          | "LINK"
          | "WILD_TYPE"
          | "MUTATED_TYPE"
          | "CONSEQUENCE_TYPE"
          | "PREDICTED_IMPACT"
          | "CLINICAL_SIGNIFICANCE"
          | "EVIDENCE"
          | "DISEASE_TYPE"
          | "STRAIN_ID"
          | "SUBTYPE"
          | "CARD_MODEL_DESCRIPTION"
          | "CARD_MODEL_ORGANISM"
          | "PARENT_COMP_ID"
          | "CATH_DOMAIN_ID"
          | "CATH_NAME"
          | "ECOD_DOMAIN_ID"
          | "ECOD_FAMILY_NAME"
          | "MODELCIF_MODEL_ID"
          | "OMEGA_ANGLE"
          | "PARTNER_ASYM_ID"
          | "PARTNER_BOND_DISTANCE"
          | "PARTNER_COMP_ID"
          | "SCOP2_DOMAIN_ID"
          | "SCOP2_FAMILY_ID"
          | "SCOP2_FAMILY_NAME"
          | "SCOP2_SUPERFAMILY_ID"
          | "SCOP2_SUPERFAMILY_NAME"
          | "SCOP_DOMAIN_ID"
          | "SCOP_NAME"
          | "SCOP_SUN_ID"
          | "SHEET_SENSE";
        property_value?: (string | number | number)[];
        [k: string]: unknown;
      }[];
      feature_positions?: {
        /**
         * An identifier for the monomer at which this segment of the feature begins.
         */
        beg_seq_id?: number;
        /**
         * An identifier for the monomer at which this segment of the feature ends.
         */
        end_seq_id?: number;
        /**
         * The value for the feature over this monomer segment.
         */
        value?: number;
        /**
         * The value(s) for the feature over this monomer segment.
         */
        values?: number[];
      }[];
    },
    ...{
      /**
       * A description for the feature.
       */
      description?: string;
      /**
       * An identifier for the feature.
       */
      feature_id?: string;
      /**
       * A name for the feature.
       */
      name?: string;
      /**
       * A name for the provenance source.
       */
      provenance_source?: string;
      /**
       * The connection type.
       */
      type?:
        | "ASA"
        | "ASA_UNBOUND"
        | "ASA_BOUND"
        | "ACTIVE_SITE"
        | "BINDING_SITE"
        | "CALCIUM_BINDING_REGION"
        | "CHAIN"
        | "COMPOSITIONALLY_BIASED_REGION"
        | "CROSS_LINK"
        | "DNA_BINDING_REGION"
        | "DOMAIN"
        | "GLYCOSYLATION_SITE"
        | "INITIATOR_METHIONINE"
        | "LIPID_MOIETY_BINDING_REGION"
        | "METAL_ION_BINDING_SITE"
        | "MODIFIED_RESIDUE"
        | "MUTAGENESIS_SITE"
        | "NON_CONSECUTIVE_RESIDUES"
        | "NON_TERMINAL_RESIDUE"
        | "NUCLEOTIDE_PHOSPHATE_BINDING_REGION"
        | "PEPTIDE"
        | "PROPEPTIDE"
        | "REGION_OF_INTEREST"
        | "REPEAT"
        | "NON_STANDARD_AMINO_ACID"
        | "SEQUENCE_CONFLICT"
        | "SEQUENCE_VARIANT"
        | "SHORT_SEQUENCE_MOTIF"
        | "SIGNAL_PEPTIDE"
        | "SITE"
        | "SPLICE_VARIANT"
        | "TOPOLOGICAL_DOMAIN"
        | "TRANSIT_PEPTIDE"
        | "TRANSMEMBRANE_REGION"
        | "UNSURE_RESIDUE"
        | "ZINC_FINGER_REGION"
        | "INTRAMEMBRANE_REGION"
        | "hydropathy"
        | "disorder"
        | "disorder_binding"
        | "CARD_MODEL"
        | "IMGT_ANTIBODY_DESCRIPTION"
        | "IMGT_ANTIBODY_DOMAIN_NAME"
        | "IMGT_ANTIBODY_GENE_ALLELE_NAME"
        | "IMGT_ANTIBODY_ORGANISM_NAME"
        | "IMGT_ANTIBODY_PROTEIN_NAME"
        | "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION"
        | "IMGT_ANTIBODY_RECEPTOR_TYPE"
        | "Pfam"
        | "SABDAB_ANTIBODY_ANTIGEN_NAME"
        | "SABDAB_ANTIBODY_NAME"
        | "SABDAB_ANTIBODY_TARGET"
        | "artifact"
        | "modified_monomer"
        | "mutation"
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BOND_OUTLIER"
        | "C-MANNOSYLATION_SITE"
        | "CATH"
        | "CIS-PEPTIDE"
        | "ECOD"
        | "HELIX_P"
        | "HELX_LH_PP_P"
        | "HELX_RH_3T_P"
        | "HELX_RH_AL_P"
        | "HELX_RH_PI_P"
        | "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY"
        | "MA_QA_METRIC_LOCAL_TYPE_DISTANCE"
        | "MA_QA_METRIC_LOCAL_TYPE_ENERGY"
        | "MA_QA_METRIC_LOCAL_TYPE_IPTM"
        | "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE"
        | "MA_QA_METRIC_LOCAL_TYPE_OTHER"
        | "MA_QA_METRIC_LOCAL_TYPE_PAE"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1]"
        | "MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1]"
        | "MA_QA_METRIC_LOCAL_TYPE_PTM"
        | "MA_QA_METRIC_LOCAL_TYPE_ZSCORE"
        | "MEMBRANE_SEGMENT"
        | "MOGUL_ANGLE_OUTLIER"
        | "MOGUL_BOND_OUTLIER"
        | "N-GLYCOSYLATION_SITE"
        | "O-GLYCOSYLATION_SITE"
        | "RAMACHANDRAN_OUTLIER"
        | "ROTAMER_OUTLIER"
        | "RSCC_OUTLIER"
        | "RSRZ_OUTLIER"
        | "S-GLYCOSYLATION_SITE"
        | "SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS"
        | "SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS"
        | "SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE"
        | "SCOP"
        | "SCOP2B_SUPERFAMILY"
        | "SCOP2_FAMILY"
        | "SCOP2_SUPERFAMILY"
        | "SHEET"
        | "STEREO_OUTLIER"
        | "STRN"
        | "TURN_TY1_P"
        | "UNASSIGNED_SEC_STRUCT"
        | "UNOBSERVED_ATOM_XYZ"
        | "UNOBSERVED_RESIDUE_XYZ"
        | "ZERO_OCCUPANCY_ATOM_XYZ"
        | "ZERO_OCCUPANCY_RESIDUE_XYZ"
        | "covalent bond"
        | "covalent modification of a nucleotide base"
        | "covalent modification of a nucleotide phosphate"
        | "covalent modification of a nucleotide sugar"
        | "covalent residue modification"
        | "disulfide bridge"
        | "hydrogen bond"
        | "ionic interaction"
        | "metal coordination"
        | "mismatched base pairs";
      /**
       * The value for the feature.
       */
      value?: number;
      additional_properties?: {
        /**
         * The additional property name.
         */
        property_name?:
          | "LINK"
          | "WILD_TYPE"
          | "MUTATED_TYPE"
          | "CONSEQUENCE_TYPE"
          | "PREDICTED_IMPACT"
          | "CLINICAL_SIGNIFICANCE"
          | "EVIDENCE"
          | "DISEASE_TYPE"
          | "STRAIN_ID"
          | "SUBTYPE"
          | "CARD_MODEL_DESCRIPTION"
          | "CARD_MODEL_ORGANISM"
          | "PARENT_COMP_ID"
          | "CATH_DOMAIN_ID"
          | "CATH_NAME"
          | "ECOD_DOMAIN_ID"
          | "ECOD_FAMILY_NAME"
          | "MODELCIF_MODEL_ID"
          | "OMEGA_ANGLE"
          | "PARTNER_ASYM_ID"
          | "PARTNER_BOND_DISTANCE"
          | "PARTNER_COMP_ID"
          | "SCOP2_DOMAIN_ID"
          | "SCOP2_FAMILY_ID"
          | "SCOP2_FAMILY_NAME"
          | "SCOP2_SUPERFAMILY_ID"
          | "SCOP2_SUPERFAMILY_NAME"
          | "SCOP_DOMAIN_ID"
          | "SCOP_NAME"
          | "SCOP_SUN_ID"
          | "SHEET_SENSE";
        property_value?: (string | number | number)[];
        [k: string]: unknown;
      }[];
      feature_positions?: {
        /**
         * An identifier for the monomer at which this segment of the feature begins.
         */
        beg_seq_id?: number;
        /**
         * An identifier for the monomer at which this segment of the feature ends.
         */
        end_seq_id?: number;
        /**
         * The value for the feature over this monomer segment.
         */
        value?: number;
        /**
         * The value(s) for the feature over this monomer segment.
         */
        values?: number[];
      }[];
    }[]
  ];
}
