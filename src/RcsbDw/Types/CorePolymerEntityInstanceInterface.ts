/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * JSON schema for entity instance core data.
 */
export interface CorePolymerEntityInstance {
  pdbx_struct_special_symmetry?: [
    {
      /**
       * Part of the identifier for the molecular component.
       *
       * This data item is a pointer to _atom_site.pdbx_PDB_model_num in the
       * ATOM_SITE category.
       */
      PDB_model_num?: number;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.auth_seq_id in the
       *  ATOM_SITE category.
       */
      auth_seq_id?: string;
      /**
       * The value of _pdbx_struct_special_symmetry.id must uniquely identify
       *  each item in the PDBX_STRUCT_SPECIAL_SYMMETRY list.
       *
       *  This is an integer serial number.
       */
      id: number;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.label_asym_id in the
       *  ATOM_SITE category.
       */
      label_asym_id?: string;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.label_comp_id in the
       *  ATOM_SITE category.
       */
      label_comp_id?: string;
    },
    ...{
      /**
       * Part of the identifier for the molecular component.
       *
       * This data item is a pointer to _atom_site.pdbx_PDB_model_num in the
       * ATOM_SITE category.
       */
      PDB_model_num?: number;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.auth_seq_id in the
       *  ATOM_SITE category.
       */
      auth_seq_id?: string;
      /**
       * The value of _pdbx_struct_special_symmetry.id must uniquely identify
       *  each item in the PDBX_STRUCT_SPECIAL_SYMMETRY list.
       *
       *  This is an integer serial number.
       */
      id: number;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.label_asym_id in the
       *  ATOM_SITE category.
       */
      label_asym_id?: string;
      /**
       * Part of the identifier for the molecular component.
       *
       *  This data item is a pointer to _atom_site.label_comp_id in the
       *  ATOM_SITE category.
       */
      label_comp_id?: string;
    }[]
  ];
  rcsb_ligand_neighbors?: [
    {
      /**
       * Alternate conformer identifier for the target instance.
       */
      alt_id?: string;
      /**
       * The atom identifier for the target instance.
       */
      atom_id?: string;
      /**
       * The author residue index for the target instance.
       */
      auth_seq_id?: number;
      /**
       * Component identifier for the target instance.
       */
      comp_id?: string;
      /**
       * Distance value for this ligand interaction.
       */
      distance?: number;
      /**
       * Alternate conformer identifier for the ligand interaction.
       */
      ligand_alt_id?: string;
      /**
       * The entity instance identifier for the ligand interaction.
       */
      ligand_asym_id?: string;
      /**
       * The atom identifier for the ligand interaction.
       */
      ligand_atom_id?: string;
      /**
       * The chemical component identifier for the ligand interaction.
       */
      ligand_comp_id?: string;
      /**
       * The entity identifier for the ligand of interaction.
       */
      ligand_entity_id?: string;
      /**
       * A flag to indicate the nature of the ligand interaction is covalent or metal-coordination.
       */
      ligand_is_bound?: "N" | "Y";
      /**
       * Model identifier for the ligand interaction.
       */
      ligand_model_id?: number;
      /**
       * The sequence position for the target instance.
       */
      seq_id?: number;
    },
    ...{
      /**
       * Alternate conformer identifier for the target instance.
       */
      alt_id?: string;
      /**
       * The atom identifier for the target instance.
       */
      atom_id?: string;
      /**
       * The author residue index for the target instance.
       */
      auth_seq_id?: number;
      /**
       * Component identifier for the target instance.
       */
      comp_id?: string;
      /**
       * Distance value for this ligand interaction.
       */
      distance?: number;
      /**
       * Alternate conformer identifier for the ligand interaction.
       */
      ligand_alt_id?: string;
      /**
       * The entity instance identifier for the ligand interaction.
       */
      ligand_asym_id?: string;
      /**
       * The atom identifier for the ligand interaction.
       */
      ligand_atom_id?: string;
      /**
       * The chemical component identifier for the ligand interaction.
       */
      ligand_comp_id?: string;
      /**
       * The entity identifier for the ligand of interaction.
       */
      ligand_entity_id?: string;
      /**
       * A flag to indicate the nature of the ligand interaction is covalent or metal-coordination.
       */
      ligand_is_bound?: "N" | "Y";
      /**
       * Model identifier for the ligand interaction.
       */
      ligand_model_id?: number;
      /**
       * The sequence position for the target instance.
       */
      seq_id?: number;
    }[]
  ];
  rcsb_polymer_entity_instance_container_identifiers?: {
    /**
     * Instance identifier for this container.
     */
    asym_id: string;
    /**
     * Author instance identifier for this container.
     */
    auth_asym_id?: string;
    auth_to_entity_poly_seq_mapping?: string[];
    /**
     * Entity identifier for the container.
     */
    entity_id?: string;
    /**
     * Entry identifier for the container.
     */
    entry_id: string;
    /**
     * A unique identifier for each object in this entity instance container formed by
     *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
     */
    rcsb_id?: string;
  };
  rcsb_polymer_instance_annotation?: [
    {
      /**
       * An identifier for the annotation.
       */
      annotation_id?: string;
      /**
       * Identifies the version of the annotation assignment.
       */
      assignment_version?: string;
      /**
       * A description for the annotation.
       */
      description?: string;
      /**
       * A name for the annotation.
       */
      name?: string;
      /**
       * Ordinal identifier for this category
       */
      ordinal: number;
      /**
       * Code identifying the individual, organization or program that
       *  assigned the annotation.
       */
      provenance_source?: string;
      /**
       * A type or category of the annotation.
       */
      type?: "CATH" | "ECOD" | "SCOP" | "SCOP2";
      annotation_lineage?: {
        /**
         * Members of the annotation lineage as parent lineage depth (1-N)
         */
        depth?: number;
        /**
         * Members of the annotation lineage as parent class identifiers.
         */
        id?: string;
        /**
         * Members of the annotation lineage as parent class names.
         */
        name?: string;
      }[];
    },
    ...{
      /**
       * An identifier for the annotation.
       */
      annotation_id?: string;
      /**
       * Identifies the version of the annotation assignment.
       */
      assignment_version?: string;
      /**
       * A description for the annotation.
       */
      description?: string;
      /**
       * A name for the annotation.
       */
      name?: string;
      /**
       * Ordinal identifier for this category
       */
      ordinal: number;
      /**
       * Code identifying the individual, organization or program that
       *  assigned the annotation.
       */
      provenance_source?: string;
      /**
       * A type or category of the annotation.
       */
      type?: "CATH" | "ECOD" | "SCOP" | "SCOP2";
      annotation_lineage?: {
        /**
         * Members of the annotation lineage as parent lineage depth (1-N)
         */
        depth?: number;
        /**
         * Members of the annotation lineage as parent class identifiers.
         */
        id?: string;
        /**
         * Members of the annotation lineage as parent class names.
         */
        name?: string;
      }[];
    }[]
  ];
  rcsb_polymer_instance_feature?: [
    {
      /**
       * Identifies the version of the feature assignment.
       */
      assignment_version?: string;
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
       * Ordinal identifier for this category
       */
      ordinal: number;
      /**
       * Code identifying the individual, organization or program that
       *  assigned the feature.
       */
      provenance_source?: string;
      /**
       * Code residue coordinate system for the assigned feature.
       */
      reference_scheme?: "NCBI" | "PDB entity" | "PDB entry" | "UniProt";
      /**
       * A type or category of the feature.
       */
      type?:
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BINDING_SITE"
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
        | "ASA";
      feature_positions?: {
        /**
         * An identifier for the monomer(s) corresponding to the feature assignment.
         */
        beg_comp_id?: string;
        /**
         * An identifier for the monomer at which this segment of the feature begins.
         */
        beg_seq_id: number;
        /**
         * An identifier for the monomer at which this segment of the feature ends.
         */
        end_seq_id?: number;
        /**
         * The value of the feature over the monomer segment.
         */
        value?: number;
        values?: number[];
      }[];
      additional_properties?: {
        /**
         * The additional property name.
         */
        name?:
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
        values?: (string | number | number)[];
      }[];
    },
    ...{
      /**
       * Identifies the version of the feature assignment.
       */
      assignment_version?: string;
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
       * Ordinal identifier for this category
       */
      ordinal: number;
      /**
       * Code identifying the individual, organization or program that
       *  assigned the feature.
       */
      provenance_source?: string;
      /**
       * Code residue coordinate system for the assigned feature.
       */
      reference_scheme?: "NCBI" | "PDB entity" | "PDB entry" | "UniProt";
      /**
       * A type or category of the feature.
       */
      type?:
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BINDING_SITE"
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
        | "ASA";
      feature_positions?: {
        /**
         * An identifier for the monomer(s) corresponding to the feature assignment.
         */
        beg_comp_id?: string;
        /**
         * An identifier for the monomer at which this segment of the feature begins.
         */
        beg_seq_id: number;
        /**
         * An identifier for the monomer at which this segment of the feature ends.
         */
        end_seq_id?: number;
        /**
         * The value of the feature over the monomer segment.
         */
        value?: number;
        values?: number[];
      }[];
      additional_properties?: {
        /**
         * The additional property name.
         */
        name?:
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
        values?: (string | number | number)[];
      }[];
    }[]
  ];
  rcsb_polymer_instance_feature_summary?: [
    {
      /**
       * The feature count per polymer chain.
       */
      count?: number;
      /**
       * The fractional feature coverage relative to the full entity sequence.
       *  For instance, the fraction of features such as CATH or SCOP domains, secondary structure elements,
       *  unobserved residues, or geometrical outliers relative to the length of the entity sequence.
       */
      coverage?: number;
      /**
       * The maximum feature length.
       */
      maximum_length?: number;
      /**
       * The maximum feature value.
       */
      maximum_value?: number;
      /**
       * The minimum feature length.
       */
      minimum_length?: number;
      /**
       * The minimum feature value.
       */
      minimum_value?: number;
      /**
       * Type or category of the feature.
       */
      type?:
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BINDING_SITE"
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
        | "ZERO_OCCUPANCY_RESIDUE_XYZ";
    },
    ...{
      /**
       * The feature count per polymer chain.
       */
      count?: number;
      /**
       * The fractional feature coverage relative to the full entity sequence.
       *  For instance, the fraction of features such as CATH or SCOP domains, secondary structure elements,
       *  unobserved residues, or geometrical outliers relative to the length of the entity sequence.
       */
      coverage?: number;
      /**
       * The maximum feature length.
       */
      maximum_length?: number;
      /**
       * The maximum feature value.
       */
      maximum_value?: number;
      /**
       * The minimum feature length.
       */
      minimum_length?: number;
      /**
       * The minimum feature value.
       */
      minimum_value?: number;
      /**
       * Type or category of the feature.
       */
      type?:
        | "ANGLE_OUTLIER"
        | "BEND"
        | "BINDING_SITE"
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
        | "ZERO_OCCUPANCY_RESIDUE_XYZ";
    }[]
  ];
  rcsb_polymer_struct_conn?: [
    {
      /**
       * The connection type.
       */
      connect_type?:
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
       * A description of special details of the connection.
       */
      description?: string;
      /**
       * Distance value for this contact.
       */
      dist_value?: number;
      /**
       * The value of _rcsb_polymer_struct_conn.id is an identifier for connection.
       *
       *  Note that this item need not be a number; it can be any unique
       *  identifier.
       */
      id?: string;
      /**
       * The value of _rcsb_polymer_struct_conn.id must uniquely identify a record in
       *  the rcsb_polymer_struct_conn list.
       */
      ordinal_id: number;
      /**
       * The chemical or structural role of the interaction
       */
      role?: "C-Mannosylation" | "N-Glycosylation" | "O-Glycosylation" | "S-Glycosylation";
      /**
       * The chemical bond order associated with the specified atoms in
       *  this contact.
       */
      value_order?: "doub" | "quad" | "sing" | "trip";
      connect_target?: {
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.auth_asym_id in the
         *  ATOM_SITE category.
         */
        auth_asym_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.auth_seq_id in the
         *  ATOM_SITE category.
         */
        auth_seq_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_alt_id in the
         *  ATOM_SITE category.
         */
        label_alt_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_asym_id in the
         *  ATOM_SITE category.
         */
        label_asym_id: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_atom_id in the
         *  ATOM_SITE category.
         */
        label_atom_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_comp_id in the
         *  ATOM_SITE category.
         */
        label_comp_id: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.connect_target_label_seq_id in the
         *  ATOM_SITE category.
         */
        label_seq_id?: number;
        /**
         * Describes the symmetry operation that should be applied to the
         *  atom set specified by _rcsb_polymer_struct_conn.label* to generate the
         *  target of the structure connection.
         */
        symmetry?: string;
      };
      connect_partner?: {
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_alt_id in the
         *  ATOM_SITE category.
         */
        label_alt_id?: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_asym_id in the
         *  ATOM_SITE category.
         */
        label_asym_id: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _chem_comp_atom.atom_id in the
         *  CHEM_COMP_ATOM category.
         */
        label_atom_id?: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_comp_id in the
         *  ATOM_SITE category.
         */
        label_comp_id: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_seq_id in the
         *  ATOM_SITE category.
         */
        label_seq_id?: number;
        /**
         * Describes the symmetry operation that should be applied to the
         *  atom set specified by _rcsb_polymer_struct_conn.connect_partner_label* to generate the
         *  partner in the structure connection.
         */
        symmetry?: string;
      };
    },
    ...{
      /**
       * The connection type.
       */
      connect_type?:
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
       * A description of special details of the connection.
       */
      description?: string;
      /**
       * Distance value for this contact.
       */
      dist_value?: number;
      /**
       * The value of _rcsb_polymer_struct_conn.id is an identifier for connection.
       *
       *  Note that this item need not be a number; it can be any unique
       *  identifier.
       */
      id?: string;
      /**
       * The value of _rcsb_polymer_struct_conn.id must uniquely identify a record in
       *  the rcsb_polymer_struct_conn list.
       */
      ordinal_id: number;
      /**
       * The chemical or structural role of the interaction
       */
      role?: "C-Mannosylation" | "N-Glycosylation" | "O-Glycosylation" | "S-Glycosylation";
      /**
       * The chemical bond order associated with the specified atoms in
       *  this contact.
       */
      value_order?: "doub" | "quad" | "sing" | "trip";
      connect_target?: {
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.auth_asym_id in the
         *  ATOM_SITE category.
         */
        auth_asym_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.auth_seq_id in the
         *  ATOM_SITE category.
         */
        auth_seq_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_alt_id in the
         *  ATOM_SITE category.
         */
        label_alt_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_asym_id in the
         *  ATOM_SITE category.
         */
        label_asym_id: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_atom_id in the
         *  ATOM_SITE category.
         */
        label_atom_id?: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_comp_id in the
         *  ATOM_SITE category.
         */
        label_comp_id: string;
        /**
         * A component of the identifier for the target of the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.connect_target_label_seq_id in the
         *  ATOM_SITE category.
         */
        label_seq_id?: number;
        /**
         * Describes the symmetry operation that should be applied to the
         *  atom set specified by _rcsb_polymer_struct_conn.label* to generate the
         *  target of the structure connection.
         */
        symmetry?: string;
      };
      connect_partner?: {
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_alt_id in the
         *  ATOM_SITE category.
         */
        label_alt_id?: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_asym_id in the
         *  ATOM_SITE category.
         */
        label_asym_id: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _chem_comp_atom.atom_id in the
         *  CHEM_COMP_ATOM category.
         */
        label_atom_id?: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_comp_id in the
         *  ATOM_SITE category.
         */
        label_comp_id: string;
        /**
         * A component of the identifier for the partner in the structure
         *  connection.
         *
         *  This data item is a pointer to _atom_site.label_seq_id in the
         *  ATOM_SITE category.
         */
        label_seq_id?: number;
        /**
         * Describes the symmetry operation that should be applied to the
         *  atom set specified by _rcsb_polymer_struct_conn.connect_partner_label* to generate the
         *  partner in the structure connection.
         */
        symmetry?: string;
      };
    }[]
  ];
  struct_asym?: {
    /**
     * This data item is a pointer to _atom_site.pdbx_PDB_strand_id the
     *  ATOM_SITE category.
     */
    pdbx_PDB_id?: string;
    /**
     * This data item is a pointer to _atom_site.ndb_alias_strand_id the
     *  ATOM_SITE category.
     */
    pdbx_alt_id?: string;
    /**
     * This data item gives the order of the structural elements in the
     *  ATOM_SITE category.
     */
    pdbx_order?: number;
    /**
     * This data item describes the general type of the structural elements
     *  in the ATOM_SITE category.
     */
    pdbx_type?: "ATOMN" | "ATOMP" | "ATOMS" | "HETAC" | "HETAD" | "HETAI" | "HETAIN" | "HETAS" | "HETIC";
  };
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   */
  rcsb_id: string;
  rcsb_latest_revision?: {
    /**
     * The major version number of the latest revision.
     */
    major_revision?: number;
    /**
     * The minor version number of the latest revision.
     */
    minor_revision?: number;
    /**
     * The release date of the latest revision item.
     */
    revision_date?: string;
    [k: string]: unknown;
  };
}
