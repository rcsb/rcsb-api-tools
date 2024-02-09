/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CoreUniProt {
  /**
   * Primary accession number of a given UniProtKB entry.
   */
  rcsb_id?: string;
  rcsb_uniprot_container_identifiers: {
    /**
     * Primary accession number of a given UniProtKB entry.
     */
    uniprot_id?: string;
    reference_sequence_identifiers?: {
      /**
       * Reference database accession code
       */
      database_accession?: string;
      /**
       * Reference database identifier for the sequence isoform
       */
      database_isoform?: string;
      /**
       * Reference database name
       */
      database_name?: string;
      /**
       * Source of the reference database assignment
       */
      provenance_source?: string;
    }[];
  };
  /**
   * List of UniProtKB accession numbers where original accession numbers are retained as ‘secondary’ accession numbers.
   */
  rcsb_uniprot_accession?: string[];
  /**
   * A list of unique identifiers (former IDs), often containing biologically relevant information.
   */
  rcsb_uniprot_entry_name?: string[];
  /**
   * Keywords constitute a controlled vocabulary that summarises the content of a UniProtKB entry.
   */
  rcsb_uniprot_keyword?: {
    /**
     * A unique keyword identifier.
     */
    id?: string;
    /**
     * Human-readable keyword term.
     */
    value?: string;
  }[];
  rcsb_uniprot_protein?: {
    /**
     * Protein sequence data for canonical protein sequence.
     */
    sequence?: string;
    name?: {
      /**
       * Name that allows to unambiguously identify a protein.
       */
      value: string;
      /**
       * Historical record of the data attribute.
       */
      provenance_code: string;
    };
    function?: {
      /**
       * General function(s) of a protein.
       */
      details?: string;
      /**
       * Historical record of the data attribute.
       */
      provenance_code?: string;
      [k: string]: unknown;
    };
    gene?: {
      name?: {
        type?: "PRIMARY" | "SYNONYM" | "ORDERED_LOCUS" | "ORF";
        value?: string;
        [k: string]: unknown;
      }[];
    }[];
    /**
     * Taxonomy information on the organism that is the source of the protein sequence.
     */
    source_organism?: {
      /**
       * The scientific name of the organism in which a protein occurs.
       */
      scientific_name: string;
      /**
       * NCBI Taxonomy identifier for the organism in which a protein occurs.
       */
      taxonomy_id?: number;
      /**
       * Historical record of the data attribute.
       */
      provenance_code: string;
    };
    /**
     * @minItems 1
     */
    ec?: [
      {
        number?: string;
        /**
         * Historical record of the data attribute.
         */
        provenance_code?: string;
      },
      ...{
        number?: string;
        /**
         * Historical record of the data attribute.
         */
        provenance_code?: string;
      }[]
    ];
  };
  /**
   * @minItems 1
   */
  rcsb_uniprot_feature?: [
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
       * Code identifying the individual, organization or program that
       *  assigned the feature.
       */
      provenance_source?: string;
      /**
       * Code residue coordinate system for the assigned feature.
       */
      reference_scheme?: string;
      /**
       * A type or category of the feature.
       */
      type?:
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
        | "INTRAMEMBRANE_REGION";
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
         * The value for the feature over this monomer segment.
         */
        value?: number;
        values?: number[];
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
       * Code identifying the individual, organization or program that
       *  assigned the feature.
       */
      provenance_source?: string;
      /**
       * Code residue coordinate system for the assigned feature.
       */
      reference_scheme?: string;
      /**
       * A type or category of the feature.
       */
      type?:
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
        | "INTRAMEMBRANE_REGION";
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
         * The value for the feature over this monomer segment.
         */
        value?: number;
        values?: number[];
      }[];
    }[]
  ];
  /**
   * @minItems 1
   */
  rcsb_uniprot_annotation?: [
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
       * Code identifying the individual, organization or program that
       *  assigned the annotation.
       */
      provenance_source?: string;
      /**
       * A type or category of the annotation.
       */
      type?: "disease" | "phenotype" | "GO" | "InterPro";
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
      additional_properties?: {
        /**
         * The additional property name
         */
        name?: "INTERPRO_TYPE";
        values?: (string | number | number)[];
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
       * Code identifying the individual, organization or program that
       *  assigned the annotation.
       */
      provenance_source?: string;
      /**
       * A type or category of the annotation.
       */
      type?: "disease" | "phenotype" | "GO" | "InterPro";
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
      additional_properties?: {
        /**
         * The additional property name
         */
        name?: "INTERPRO_TYPE";
        values?: (string | number | number)[];
      }[];
    }[]
  ];
  rcsb_uniprot_external_reference?: {
    reference_id?: string;
    reference_name?: "IMPC" | "GTEX" | "PHAROS";
    provenance_source?: string;
    [k: string]: unknown;
  }[];
  /**
   * UniProt pairwise sequence alignments.
   */
  rcsb_uniprot_alignments?: {
    /**
     * List of alignments with core_entity canonical sequences
     */
    core_entity_alignments?: {
      /**
       * Alignment scores
       */
      scores: {
        target_coverage: number;
        query_coverage: number;
        target_length: number;
        query_length: number;
        [k: string]: unknown;
      };
      /**
       * Aligned sequence regions
       */
      aligned_regions: {
        /**
         * NCBI sequence start position
         */
        target_begin: number;
        /**
         * Entity seqeunce start position
         */
        query_begin: number;
        /**
         * Aligned region length
         */
        length: number;
        [k: string]: unknown;
      }[];
      /**
       * core_entity identifiers
       */
      core_entity_identifiers?: {
        entry_id: string;
        entity_id: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
  };
}
