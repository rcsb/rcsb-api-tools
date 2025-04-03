export declare class CoreAssembly {
    static readonly PdbxStructAssembly: {
        Details: "pdbx_struct_assembly.details";
        Id: "pdbx_struct_assembly.id";
        MethodDetails: "pdbx_struct_assembly.method_details";
        OligomericCount: "pdbx_struct_assembly.oligomeric_count";
        OligomericDetails: "pdbx_struct_assembly.oligomeric_details";
        RcsbCandidateAssembly: "pdbx_struct_assembly.rcsb_candidate_assembly";
        RcsbDetails: "pdbx_struct_assembly.rcsb_details";
    };
    static readonly PdbxStructAssemblyAuthEvidence: {
        AssemblyId: "pdbx_struct_assembly_auth_evidence.assembly_id";
        Details: "pdbx_struct_assembly_auth_evidence.details";
        ExperimentalSupport: "pdbx_struct_assembly_auth_evidence.experimental_support";
        Id: "pdbx_struct_assembly_auth_evidence.id";
    };
    static readonly PdbxStructAssemblyGen: {
        AssemblyId: "pdbx_struct_assembly_gen.assembly_id";
        AsymIdList: "pdbx_struct_assembly_gen.asym_id_list";
        OperExpression: "pdbx_struct_assembly_gen.oper_expression";
        Ordinal: "pdbx_struct_assembly_gen.ordinal";
    };
    static readonly PdbxStructAssemblyProp: {
        AssemblyId: "pdbx_struct_assembly_prop.assembly_id";
        BiolId: "pdbx_struct_assembly_prop.biol_id";
        Type: "pdbx_struct_assembly_prop.type";
        Value: "pdbx_struct_assembly_prop.value";
    };
    static readonly PdbxStructOperList: {
        Id: "pdbx_struct_oper_list.id";
        Matrix11: "pdbx_struct_oper_list.matrix_1_1";
        Matrix12: "pdbx_struct_oper_list.matrix_1_2";
        Matrix13: "pdbx_struct_oper_list.matrix_1_3";
        Matrix21: "pdbx_struct_oper_list.matrix_2_1";
        Matrix22: "pdbx_struct_oper_list.matrix_2_2";
        Matrix23: "pdbx_struct_oper_list.matrix_2_3";
        Matrix31: "pdbx_struct_oper_list.matrix_3_1";
        Matrix32: "pdbx_struct_oper_list.matrix_3_2";
        Matrix33: "pdbx_struct_oper_list.matrix_3_3";
        Name: "pdbx_struct_oper_list.name";
        SymmetryOperation: "pdbx_struct_oper_list.symmetry_operation";
        Type: "pdbx_struct_oper_list.type";
        Vector1: "pdbx_struct_oper_list.vector_1";
        Vector2: "pdbx_struct_oper_list.vector_2";
        Vector3: "pdbx_struct_oper_list.vector_3";
    };
    static readonly RcsbAssemblyAnnotation: {
        AdditionalProperties: {
            Name: "rcsb_assembly_annotation.additional_properties.name";
            Values: "rcsb_assembly_annotation.additional_properties.values";
        };
        AnnotationId: "rcsb_assembly_annotation.annotation_id";
        AssignmentVersion: "rcsb_assembly_annotation.assignment_version";
        Description: "rcsb_assembly_annotation.description";
        Name: "rcsb_assembly_annotation.name";
        ProvenanceSource: "rcsb_assembly_annotation.provenance_source";
        Type: "rcsb_assembly_annotation.type";
    };
    static readonly RcsbAssemblyContainerIdentifiers: {
        AssemblyId: "rcsb_assembly_container_identifiers.assembly_id";
        EntryId: "rcsb_assembly_container_identifiers.entry_id";
        InterfaceIds: "rcsb_assembly_container_identifiers.interface_ids";
        RcsbId: "rcsb_assembly_container_identifiers.rcsb_id";
    };
    static readonly RcsbAssemblyFeature: {
        AdditionalProperties: {
            Name: "rcsb_assembly_feature.additional_properties.name";
            Values: "rcsb_assembly_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_assembly_feature.assignment_version";
        Description: "rcsb_assembly_feature.description";
        FeatureId: "rcsb_assembly_feature.feature_id";
        FeaturePositions: {
            AsymId: "rcsb_assembly_feature.feature_positions.asym_id";
            BegSeqId: "rcsb_assembly_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_assembly_feature.feature_positions.end_seq_id";
            StructOperList: "rcsb_assembly_feature.feature_positions.struct_oper_list";
            Values: "rcsb_assembly_feature.feature_positions.values";
        };
        Name: "rcsb_assembly_feature.name";
        ProvenanceSource: "rcsb_assembly_feature.provenance_source";
        Type: "rcsb_assembly_feature.type";
    };
    static readonly RcsbAssemblyInfo: {
        AssemblyId: "rcsb_assembly_info.assembly_id";
        AtomCount: "rcsb_assembly_info.atom_count";
        BranchedAtomCount: "rcsb_assembly_info.branched_atom_count";
        BranchedEntityCount: "rcsb_assembly_info.branched_entity_count";
        BranchedEntityInstanceCount: "rcsb_assembly_info.branched_entity_instance_count";
        DeuteratedWaterCount: "rcsb_assembly_info.deuterated_water_count";
        EntryId: "rcsb_assembly_info.entry_id";
        HydrogenAtomCount: "rcsb_assembly_info.hydrogen_atom_count";
        ModeledPolymerMonomerCount: "rcsb_assembly_info.modeled_polymer_monomer_count";
        NaPolymerEntityTypes: "rcsb_assembly_info.na_polymer_entity_types";
        NonpolymerAtomCount: "rcsb_assembly_info.nonpolymer_atom_count";
        NonpolymerEntityCount: "rcsb_assembly_info.nonpolymer_entity_count";
        NonpolymerEntityInstanceCount: "rcsb_assembly_info.nonpolymer_entity_instance_count";
        NumHeterologousInterfaceEntities: "rcsb_assembly_info.num_heterologous_interface_entities";
        NumHeteromericInterfaceEntities: "rcsb_assembly_info.num_heteromeric_interface_entities";
        NumHomomericInterfaceEntities: "rcsb_assembly_info.num_homomeric_interface_entities";
        NumInterfaceEntities: "rcsb_assembly_info.num_interface_entities";
        NumInterfaces: "rcsb_assembly_info.num_interfaces";
        NumIsologousInterfaceEntities: "rcsb_assembly_info.num_isologous_interface_entities";
        NumNaInterfaceEntities: "rcsb_assembly_info.num_na_interface_entities";
        NumProtNaInterfaceEntities: "rcsb_assembly_info.num_prot_na_interface_entities";
        NumProteinInterfaceEntities: "rcsb_assembly_info.num_protein_interface_entities";
        PolymerAtomCount: "rcsb_assembly_info.polymer_atom_count";
        PolymerComposition: "rcsb_assembly_info.polymer_composition";
        PolymerEntityCount: "rcsb_assembly_info.polymer_entity_count";
        PolymerEntityCountDna: "rcsb_assembly_info.polymer_entity_count_DNA";
        PolymerEntityCountRna: "rcsb_assembly_info.polymer_entity_count_RNA";
        PolymerEntityCountNucleicAcid: "rcsb_assembly_info.polymer_entity_count_nucleic_acid";
        PolymerEntityCountNucleicAcidHybrid: "rcsb_assembly_info.polymer_entity_count_nucleic_acid_hybrid";
        PolymerEntityCountProtein: "rcsb_assembly_info.polymer_entity_count_protein";
        PolymerEntityInstanceCount: "rcsb_assembly_info.polymer_entity_instance_count";
        PolymerEntityInstanceCountDna: "rcsb_assembly_info.polymer_entity_instance_count_DNA";
        PolymerEntityInstanceCountRna: "rcsb_assembly_info.polymer_entity_instance_count_RNA";
        PolymerEntityInstanceCountNucleicAcid: "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid";
        PolymerEntityInstanceCountNucleicAcidHybrid: "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid_hybrid";
        PolymerEntityInstanceCountProtein: "rcsb_assembly_info.polymer_entity_instance_count_protein";
        PolymerMonomerCount: "rcsb_assembly_info.polymer_monomer_count";
        SelectedPolymerEntityTypes: "rcsb_assembly_info.selected_polymer_entity_types";
        SolventAtomCount: "rcsb_assembly_info.solvent_atom_count";
        SolventEntityCount: "rcsb_assembly_info.solvent_entity_count";
        SolventEntityInstanceCount: "rcsb_assembly_info.solvent_entity_instance_count";
        TotalAssemblyBuriedSurfaceArea: "rcsb_assembly_info.total_assembly_buried_surface_area";
        TotalNumberInterfaceResidues: "rcsb_assembly_info.total_number_interface_residues";
        UnmodeledPolymerMonomerCount: "rcsb_assembly_info.unmodeled_polymer_monomer_count";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbStructSymmetry: {
        Clusters: {
            AvgRmsd: "rcsb_struct_symmetry.clusters.avg_rmsd";
            Members: {
                AsymId: "rcsb_struct_symmetry.clusters.members.asym_id";
                PdbxStructOperListIds: "rcsb_struct_symmetry.clusters.members.pdbx_struct_oper_list_ids";
            };
        };
        Kind: "rcsb_struct_symmetry.kind";
        OligomericState: "rcsb_struct_symmetry.oligomeric_state";
        RotationAxes: {
            End: "rcsb_struct_symmetry.rotation_axes.end";
            Order: "rcsb_struct_symmetry.rotation_axes.order";
            Start: "rcsb_struct_symmetry.rotation_axes.start";
        };
        Stoichiometry: "rcsb_struct_symmetry.stoichiometry";
        Symbol: "rcsb_struct_symmetry.symbol";
        Type: "rcsb_struct_symmetry.type";
    };
    static readonly RcsbStructSymmetryLineage: {
        Depth: "rcsb_struct_symmetry_lineage.depth";
        Id: "rcsb_struct_symmetry_lineage.id";
        Name: "rcsb_struct_symmetry_lineage.name";
    };
    static readonly RcsbStructSymmetryProvenanceCode: "rcsb_struct_symmetry_provenance_code";
}
export declare class CoreBranchedEntity {
    static readonly ChemCompMonomers: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "chem_comp_monomers.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "chem_comp_monomers.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "chem_comp_monomers.drugbank.drugbank_info.atc_codes";
                BrandNames: "chem_comp_monomers.drugbank.drugbank_info.brand_names";
                CasNumber: "chem_comp_monomers.drugbank.drugbank_info.cas_number";
                Description: "chem_comp_monomers.drugbank.drugbank_info.description";
                DrugCategories: "chem_comp_monomers.drugbank.drugbank_info.drug_categories";
                DrugGroups: "chem_comp_monomers.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "chem_comp_monomers.drugbank.drugbank_info.drug_products.approved";
                    Country: "chem_comp_monomers.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "chem_comp_monomers.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "chem_comp_monomers.drugbank.drugbank_info.drug_products.name";
                    Source: "chem_comp_monomers.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "chem_comp_monomers.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "chem_comp_monomers.drugbank.drugbank_info.drugbank_id";
                Indication: "chem_comp_monomers.drugbank.drugbank_info.indication";
                MechanismOfAction: "chem_comp_monomers.drugbank.drugbank_info.mechanism_of_action";
                Name: "chem_comp_monomers.drugbank.drugbank_info.name";
                Pharmacology: "chem_comp_monomers.drugbank.drugbank_info.pharmacology";
                Synonyms: "chem_comp_monomers.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "chem_comp_monomers.drugbank.drugbank_target.interaction_type";
                Name: "chem_comp_monomers.drugbank.drugbank_target.name";
                Ordinal: "chem_comp_monomers.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "chem_comp_monomers.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "chem_comp_monomers.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "chem_comp_monomers.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "chem_comp_monomers.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "chem_comp_monomers.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "chem_comp_monomers.pdbx_chem_comp_audit.action_type";
            CompId: "chem_comp_monomers.pdbx_chem_comp_audit.comp_id";
            Date: "chem_comp_monomers.pdbx_chem_comp_audit.date";
            Details: "chem_comp_monomers.pdbx_chem_comp_audit.details";
            Ordinal: "chem_comp_monomers.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "chem_comp_monomers.pdbx_chem_comp_descriptor.descriptor";
            Program: "chem_comp_monomers.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "chem_comp_monomers.pdbx_chem_comp_descriptor.program_version";
            Type: "chem_comp_monomers.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_feature.comp_id";
            Source: "chem_comp_monomers.pdbx_chem_comp_feature.source";
            Type: "chem_comp_monomers.pdbx_chem_comp_feature.type";
            Value: "chem_comp_monomers.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_identifier.comp_id";
            Identifier: "chem_comp_monomers.pdbx_chem_comp_identifier.identifier";
            Program: "chem_comp_monomers.pdbx_chem_comp_identifier.program";
            ProgramVersion: "chem_comp_monomers.pdbx_chem_comp_identifier.program_version";
            Type: "chem_comp_monomers.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "chem_comp_monomers.pdbx_family_prd_audit.action_type";
            Annotator: "chem_comp_monomers.pdbx_family_prd_audit.annotator";
            Date: "chem_comp_monomers.pdbx_family_prd_audit.date";
            Details: "chem_comp_monomers.pdbx_family_prd_audit.details";
            FamilyPrdId: "chem_comp_monomers.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "chem_comp_monomers.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "chem_comp_monomers.pdbx_prd_audit.action_type";
            Annotator: "chem_comp_monomers.pdbx_prd_audit.annotator";
            Date: "chem_comp_monomers.pdbx_prd_audit.date";
            Details: "chem_comp_monomers.pdbx_prd_audit.details";
            PrdId: "chem_comp_monomers.pdbx_prd_audit.prd_id";
            ProcessingSite: "chem_comp_monomers.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "chem_comp_monomers.pdbx_reference_entity_list.component_id";
            Details: "chem_comp_monomers.pdbx_reference_entity_list.details";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_list.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_list.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "chem_comp_monomers.pdbx_reference_entity_poly.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_entity_poly.db_name";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "chem_comp_monomers.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "chem_comp_monomers.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "chem_comp_monomers.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "chem_comp_monomers.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "chem_comp_monomers.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "chem_comp_monomers.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "chem_comp_monomers.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "chem_comp_monomers.pdbx_reference_entity_poly_link.link_id";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "chem_comp_monomers.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "chem_comp_monomers.pdbx_reference_entity_poly_seq.hetero";
            MonId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.mon_id";
            Num: "chem_comp_monomers.pdbx_reference_entity_poly_seq.num";
            Observed: "chem_comp_monomers.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "chem_comp_monomers.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "chem_comp_monomers.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "chem_comp_monomers.pdbx_reference_entity_src_nat.atcc";
            DbCode: "chem_comp_monomers.pdbx_reference_entity_src_nat.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "chem_comp_monomers.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "chem_comp_monomers.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "chem_comp_monomers.pdbx_reference_entity_src_nat.source";
            SourceId: "chem_comp_monomers.pdbx_reference_entity_src_nat.source_id";
            Taxid: "chem_comp_monomers.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "chem_comp_monomers.pdbx_reference_molecule.chem_comp_id";
            Class: "chem_comp_monomers.pdbx_reference_molecule.class";
            ClassEvidenceCode: "chem_comp_monomers.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "chem_comp_monomers.pdbx_reference_molecule.compound_details";
            Description: "chem_comp_monomers.pdbx_reference_molecule.description";
            Formula: "chem_comp_monomers.pdbx_reference_molecule.formula";
            FormulaWeight: "chem_comp_monomers.pdbx_reference_molecule.formula_weight";
            Name: "chem_comp_monomers.pdbx_reference_molecule.name";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "chem_comp_monomers.pdbx_reference_molecule.release_status";
            ReplacedBy: "chem_comp_monomers.pdbx_reference_molecule.replaced_by";
            Replaces: "chem_comp_monomers.pdbx_reference_molecule.replaces";
            RepresentAs: "chem_comp_monomers.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "chem_comp_monomers.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "chem_comp_monomers.pdbx_reference_molecule.type";
            TypeEvidenceCode: "chem_comp_monomers.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_annotation.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_annotation.source";
            Text: "chem_comp_monomers.pdbx_reference_molecule_annotation.text";
            Type: "chem_comp_monomers.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_details.ordinal";
            Source: "chem_comp_monomers.pdbx_reference_molecule_details.source";
            SourceId: "chem_comp_monomers.pdbx_reference_molecule_details.source_id";
            Text: "chem_comp_monomers.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_family.family_prd_id";
            Name: "chem_comp_monomers.pdbx_reference_molecule_family.name";
            ReleaseStatus: "chem_comp_monomers.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "chem_comp_monomers.pdbx_reference_molecule_family.replaced_by";
            Replaces: "chem_comp_monomers.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_features.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_features.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_features.source";
            SourceOrdinal: "chem_comp_monomers.pdbx_reference_molecule_features.source_ordinal";
            Type: "chem_comp_monomers.pdbx_reference_molecule_features.type";
            Value: "chem_comp_monomers.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "chem_comp_monomers.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "chem_comp_monomers.pdbx_reference_molecule_related_structures.formula";
            Name: "chem_comp_monomers.pdbx_reference_molecule_related_structures.name";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "chem_comp_monomers.pdbx_reference_molecule_synonyms.name";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_synonyms.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "chem_comp_monomers.rcsb_bird_citation.id";
            JournalAbbrev: "chem_comp_monomers.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "chem_comp_monomers.rcsb_bird_citation.journal_volume";
            PageFirst: "chem_comp_monomers.rcsb_bird_citation.page_first";
            PageLast: "chem_comp_monomers.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "chem_comp_monomers.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "chem_comp_monomers.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "chem_comp_monomers.rcsb_bird_citation.rcsb_authors";
            Title: "chem_comp_monomers.rcsb_bird_citation.title";
            Year: "chem_comp_monomers.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "chem_comp_monomers.rcsb_chem_comp_annotation.assignment_version";
            Description: "chem_comp_monomers.rcsb_chem_comp_annotation.description";
            Name: "chem_comp_monomers.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_annotation.provenance_source";
            Type: "chem_comp_monomers.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "chem_comp_monomers.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "chem_comp_monomers.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "chem_comp_monomers.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "chem_comp_monomers.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "chem_comp_monomers.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "chem_comp_monomers.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "chem_comp_monomers.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "chem_comp_monomers.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "chem_comp_monomers.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "chem_comp_monomers.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "chem_comp_monomers.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "chem_comp_monomers.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "chem_comp_monomers.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "chem_comp_monomers.rcsb_chem_comp_info.release_status";
            RevisionDate: "chem_comp_monomers.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_related.comp_id";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "chem_comp_monomers.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "chem_comp_monomers.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "chem_comp_monomers.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_synonyms.comp_id";
            Name: "chem_comp_monomers.rcsb_chem_comp_synonyms.name";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_synonyms.provenance_source";
            Type: "chem_comp_monomers.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_target.comp_id";
            InteractionType: "chem_comp_monomers.rcsb_chem_comp_target.interaction_type";
            Name: "chem_comp_monomers.rcsb_chem_comp_target.name";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "chem_comp_monomers.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "chem_comp_monomers.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "chem_comp_monomers.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "chem_comp_monomers.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "chem_comp_monomers.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "chem_comp_monomers.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "chem_comp_monomers.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly PdbxEntityBranch: {
        RcsbBranchedComponentCount: "pdbx_entity_branch.rcsb_branched_component_count";
        Type: "pdbx_entity_branch.type";
    };
    static readonly PdbxEntityBranchDescriptor: {
        Descriptor: "pdbx_entity_branch_descriptor.descriptor";
        Program: "pdbx_entity_branch_descriptor.program";
        ProgramVersion: "pdbx_entity_branch_descriptor.program_version";
        Type: "pdbx_entity_branch_descriptor.type";
    };
    static readonly Prd: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "prd.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "prd.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "prd.drugbank.drugbank_info.atc_codes";
                BrandNames: "prd.drugbank.drugbank_info.brand_names";
                CasNumber: "prd.drugbank.drugbank_info.cas_number";
                Description: "prd.drugbank.drugbank_info.description";
                DrugCategories: "prd.drugbank.drugbank_info.drug_categories";
                DrugGroups: "prd.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "prd.drugbank.drugbank_info.drug_products.approved";
                    Country: "prd.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "prd.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "prd.drugbank.drugbank_info.drug_products.name";
                    Source: "prd.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "prd.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "prd.drugbank.drugbank_info.drugbank_id";
                Indication: "prd.drugbank.drugbank_info.indication";
                MechanismOfAction: "prd.drugbank.drugbank_info.mechanism_of_action";
                Name: "prd.drugbank.drugbank_info.name";
                Pharmacology: "prd.drugbank.drugbank_info.pharmacology";
                Synonyms: "prd.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "prd.drugbank.drugbank_target.interaction_type";
                Name: "prd.drugbank.drugbank_target.name";
                Ordinal: "prd.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "prd.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "prd.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "prd.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "prd.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "prd.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "prd.pdbx_chem_comp_audit.action_type";
            CompId: "prd.pdbx_chem_comp_audit.comp_id";
            Date: "prd.pdbx_chem_comp_audit.date";
            Details: "prd.pdbx_chem_comp_audit.details";
            Ordinal: "prd.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "prd.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "prd.pdbx_chem_comp_descriptor.descriptor";
            Program: "prd.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "prd.pdbx_chem_comp_descriptor.program_version";
            Type: "prd.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "prd.pdbx_chem_comp_feature.comp_id";
            Source: "prd.pdbx_chem_comp_feature.source";
            Type: "prd.pdbx_chem_comp_feature.type";
            Value: "prd.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "prd.pdbx_chem_comp_identifier.comp_id";
            Identifier: "prd.pdbx_chem_comp_identifier.identifier";
            Program: "prd.pdbx_chem_comp_identifier.program";
            ProgramVersion: "prd.pdbx_chem_comp_identifier.program_version";
            Type: "prd.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "prd.pdbx_family_prd_audit.action_type";
            Annotator: "prd.pdbx_family_prd_audit.annotator";
            Date: "prd.pdbx_family_prd_audit.date";
            Details: "prd.pdbx_family_prd_audit.details";
            FamilyPrdId: "prd.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "prd.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "prd.pdbx_prd_audit.action_type";
            Annotator: "prd.pdbx_prd_audit.annotator";
            Date: "prd.pdbx_prd_audit.date";
            Details: "prd.pdbx_prd_audit.details";
            PrdId: "prd.pdbx_prd_audit.prd_id";
            ProcessingSite: "prd.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "prd.pdbx_reference_entity_list.component_id";
            Details: "prd.pdbx_reference_entity_list.details";
            PrdId: "prd.pdbx_reference_entity_list.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_list.ref_entity_id";
            Type: "prd.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "prd.pdbx_reference_entity_poly.db_code";
            DbName: "prd.pdbx_reference_entity_poly.db_name";
            PrdId: "prd.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly.ref_entity_id";
            Type: "prd.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "prd.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "prd.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "prd.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "prd.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "prd.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "prd.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "prd.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "prd.pdbx_reference_entity_poly_link.link_id";
            PrdId: "prd.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "prd.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "prd.pdbx_reference_entity_poly_seq.hetero";
            MonId: "prd.pdbx_reference_entity_poly_seq.mon_id";
            Num: "prd.pdbx_reference_entity_poly_seq.num";
            Observed: "prd.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "prd.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "prd.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "prd.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "prd.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "prd.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "prd.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "prd.pdbx_reference_entity_src_nat.atcc";
            DbCode: "prd.pdbx_reference_entity_src_nat.db_code";
            DbName: "prd.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "prd.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "prd.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "prd.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "prd.pdbx_reference_entity_src_nat.source";
            SourceId: "prd.pdbx_reference_entity_src_nat.source_id";
            Taxid: "prd.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "prd.pdbx_reference_molecule.chem_comp_id";
            Class: "prd.pdbx_reference_molecule.class";
            ClassEvidenceCode: "prd.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "prd.pdbx_reference_molecule.compound_details";
            Description: "prd.pdbx_reference_molecule.description";
            Formula: "prd.pdbx_reference_molecule.formula";
            FormulaWeight: "prd.pdbx_reference_molecule.formula_weight";
            Name: "prd.pdbx_reference_molecule.name";
            PrdId: "prd.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "prd.pdbx_reference_molecule.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule.replaced_by";
            Replaces: "prd.pdbx_reference_molecule.replaces";
            RepresentAs: "prd.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "prd.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "prd.pdbx_reference_molecule.type";
            TypeEvidenceCode: "prd.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "prd.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "prd.pdbx_reference_molecule_annotation.prd_id";
            Source: "prd.pdbx_reference_molecule_annotation.source";
            Text: "prd.pdbx_reference_molecule_annotation.text";
            Type: "prd.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "prd.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_details.ordinal";
            Source: "prd.pdbx_reference_molecule_details.source";
            SourceId: "prd.pdbx_reference_molecule_details.source_id";
            Text: "prd.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "prd.pdbx_reference_molecule_family.family_prd_id";
            Name: "prd.pdbx_reference_molecule_family.name";
            ReleaseStatus: "prd.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule_family.replaced_by";
            Replaces: "prd.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "prd.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_features.ordinal";
            PrdId: "prd.pdbx_reference_molecule_features.prd_id";
            Source: "prd.pdbx_reference_molecule_features.source";
            SourceOrdinal: "prd.pdbx_reference_molecule_features.source_ordinal";
            Type: "prd.pdbx_reference_molecule_features.type";
            Value: "prd.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "prd.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "prd.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "prd.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "prd.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "prd.pdbx_reference_molecule_related_structures.db_code";
            DbName: "prd.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "prd.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "prd.pdbx_reference_molecule_related_structures.formula";
            Name: "prd.pdbx_reference_molecule_related_structures.name";
            Ordinal: "prd.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "prd.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "prd.pdbx_reference_molecule_synonyms.name";
            Ordinal: "prd.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "prd.pdbx_reference_molecule_synonyms.prd_id";
            Source: "prd.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "prd.rcsb_bird_citation.id";
            JournalAbbrev: "prd.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "prd.rcsb_bird_citation.journal_volume";
            PageFirst: "prd.rcsb_bird_citation.page_first";
            PageLast: "prd.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "prd.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "prd.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "prd.rcsb_bird_citation.rcsb_authors";
            Title: "prd.rcsb_bird_citation.title";
            Year: "prd.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "prd.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "prd.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "prd.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "prd.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "prd.rcsb_chem_comp_annotation.assignment_version";
            Description: "prd.rcsb_chem_comp_annotation.description";
            Name: "prd.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "prd.rcsb_chem_comp_annotation.provenance_source";
            Type: "prd.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "prd.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "prd.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "prd.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "prd.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "prd.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "prd.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "prd.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "prd.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "prd.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "prd.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "prd.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "prd.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "prd.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "prd.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "prd.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "prd.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "prd.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "prd.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "prd.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "prd.rcsb_chem_comp_info.release_status";
            RevisionDate: "prd.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "prd.rcsb_chem_comp_related.comp_id";
            Ordinal: "prd.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "prd.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "prd.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "prd.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "prd.rcsb_chem_comp_synonyms.comp_id";
            Name: "prd.rcsb_chem_comp_synonyms.name";
            Ordinal: "prd.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_synonyms.provenance_source";
            Type: "prd.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "prd.rcsb_chem_comp_target.comp_id";
            InteractionType: "prd.rcsb_chem_comp_target.interaction_type";
            Name: "prd.rcsb_chem_comp_target.name";
            Ordinal: "prd.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "prd.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "prd.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "prd.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "prd.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "prd.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "prd.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "prd.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly RcsbBranchedEntity: {
        Details: "rcsb_branched_entity.details";
        FormulaWeight: "rcsb_branched_entity.formula_weight";
        PdbxDescription: "rcsb_branched_entity.pdbx_description";
        PdbxNumberOfMolecules: "rcsb_branched_entity.pdbx_number_of_molecules";
    };
    static readonly RcsbBranchedEntityAnnotation: {
        AnnotationId: "rcsb_branched_entity_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_branched_entity_annotation.annotation_lineage.depth";
            Id: "rcsb_branched_entity_annotation.annotation_lineage.id";
            Name: "rcsb_branched_entity_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_branched_entity_annotation.assignment_version";
        Description: "rcsb_branched_entity_annotation.description";
        Name: "rcsb_branched_entity_annotation.name";
        ProvenanceSource: "rcsb_branched_entity_annotation.provenance_source";
        Type: "rcsb_branched_entity_annotation.type";
    };
    static readonly RcsbBranchedEntityContainerIdentifiers: {
        AsymIds: "rcsb_branched_entity_container_identifiers.asym_ids";
        AuthAsymIds: "rcsb_branched_entity_container_identifiers.auth_asym_ids";
        ChemCompMonomers: "rcsb_branched_entity_container_identifiers.chem_comp_monomers";
        ChemRefDefId: "rcsb_branched_entity_container_identifiers.chem_ref_def_id";
        EntityId: "rcsb_branched_entity_container_identifiers.entity_id";
        EntryId: "rcsb_branched_entity_container_identifiers.entry_id";
        PrdId: "rcsb_branched_entity_container_identifiers.prd_id";
        RcsbId: "rcsb_branched_entity_container_identifiers.rcsb_id";
        ReferenceIdentifiers: {
            ProvenanceSource: "rcsb_branched_entity_container_identifiers.reference_identifiers.provenance_source";
            ResourceAccession: "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_accession";
            ResourceName: "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_name";
        };
    };
    static readonly RcsbBranchedEntityFeature: {
        AdditionalProperties: {
            Name: "rcsb_branched_entity_feature.additional_properties.name";
            Values: "rcsb_branched_entity_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_branched_entity_feature.assignment_version";
        Description: "rcsb_branched_entity_feature.description";
        FeatureId: "rcsb_branched_entity_feature.feature_id";
        FeaturePositions: {
            BegCompId: "rcsb_branched_entity_feature.feature_positions.beg_comp_id";
            BegSeqId: "rcsb_branched_entity_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_branched_entity_feature.feature_positions.end_seq_id";
            Value: "rcsb_branched_entity_feature.feature_positions.value";
        };
        Name: "rcsb_branched_entity_feature.name";
        ProvenanceSource: "rcsb_branched_entity_feature.provenance_source";
        ReferenceScheme: "rcsb_branched_entity_feature.reference_scheme";
        Type: "rcsb_branched_entity_feature.type";
    };
    static readonly RcsbBranchedEntityFeatureSummary: {
        Count: "rcsb_branched_entity_feature_summary.count";
        Coverage: "rcsb_branched_entity_feature_summary.coverage";
        MaximumLength: "rcsb_branched_entity_feature_summary.maximum_length";
        MaximumValue: "rcsb_branched_entity_feature_summary.maximum_value";
        MinimumLength: "rcsb_branched_entity_feature_summary.minimum_length";
        MinimumValue: "rcsb_branched_entity_feature_summary.minimum_value";
        Type: "rcsb_branched_entity_feature_summary.type";
    };
    static readonly RcsbBranchedEntityKeywords: {
        Text: "rcsb_branched_entity_keywords.text";
    };
    static readonly RcsbBranchedEntityNameCom: {
        Name: "rcsb_branched_entity_name_com.name";
    };
    static readonly RcsbBranchedEntityNameSys: {
        Name: "rcsb_branched_entity_name_sys.name";
        System: "rcsb_branched_entity_name_sys.system";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
}
export declare class CoreBranchedEntityInstance {
    static readonly PdbxStructSpecialSymmetry: {
        PdbModelNum: "pdbx_struct_special_symmetry.PDB_model_num";
        AuthSeqId: "pdbx_struct_special_symmetry.auth_seq_id";
        Id: "pdbx_struct_special_symmetry.id";
        LabelAsymId: "pdbx_struct_special_symmetry.label_asym_id";
        LabelCompId: "pdbx_struct_special_symmetry.label_comp_id";
    };
    static readonly RcsbBranchedEntityInstanceContainerIdentifiers: {
        AsymId: "rcsb_branched_entity_instance_container_identifiers.asym_id";
        AuthAsymId: "rcsb_branched_entity_instance_container_identifiers.auth_asym_id";
        EntityId: "rcsb_branched_entity_instance_container_identifiers.entity_id";
        EntryId: "rcsb_branched_entity_instance_container_identifiers.entry_id";
        RcsbId: "rcsb_branched_entity_instance_container_identifiers.rcsb_id";
    };
    static readonly RcsbBranchedInstanceAnnotation: {
        AnnotationId: "rcsb_branched_instance_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_branched_instance_annotation.annotation_lineage.depth";
            Id: "rcsb_branched_instance_annotation.annotation_lineage.id";
            Name: "rcsb_branched_instance_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_branched_instance_annotation.assignment_version";
        CompId: "rcsb_branched_instance_annotation.comp_id";
        Description: "rcsb_branched_instance_annotation.description";
        Name: "rcsb_branched_instance_annotation.name";
        Ordinal: "rcsb_branched_instance_annotation.ordinal";
        ProvenanceSource: "rcsb_branched_instance_annotation.provenance_source";
        Type: "rcsb_branched_instance_annotation.type";
    };
    static readonly RcsbBranchedInstanceFeature: {
        AdditionalProperties: {
            Name: "rcsb_branched_instance_feature.additional_properties.name";
            Values: "rcsb_branched_instance_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_branched_instance_feature.assignment_version";
        Description: "rcsb_branched_instance_feature.description";
        FeatureId: "rcsb_branched_instance_feature.feature_id";
        FeaturePositions: {
            BegCompId: "rcsb_branched_instance_feature.feature_positions.beg_comp_id";
            BegSeqId: "rcsb_branched_instance_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_branched_instance_feature.feature_positions.end_seq_id";
            Value: "rcsb_branched_instance_feature.feature_positions.value";
            Values: "rcsb_branched_instance_feature.feature_positions.values";
        };
        FeatureValue: {
            CompId: "rcsb_branched_instance_feature.feature_value.comp_id";
            Details: "rcsb_branched_instance_feature.feature_value.details";
            Reference: "rcsb_branched_instance_feature.feature_value.reference";
            Reported: "rcsb_branched_instance_feature.feature_value.reported";
            UncertaintyEstimate: "rcsb_branched_instance_feature.feature_value.uncertainty_estimate";
            UncertaintyEstimateType: "rcsb_branched_instance_feature.feature_value.uncertainty_estimate_type";
        };
        Name: "rcsb_branched_instance_feature.name";
        Ordinal: "rcsb_branched_instance_feature.ordinal";
        ProvenanceSource: "rcsb_branched_instance_feature.provenance_source";
        ReferenceScheme: "rcsb_branched_instance_feature.reference_scheme";
        Type: "rcsb_branched_instance_feature.type";
    };
    static readonly RcsbBranchedInstanceFeatureSummary: {
        Count: "rcsb_branched_instance_feature_summary.count";
        Coverage: "rcsb_branched_instance_feature_summary.coverage";
        MaximumLength: "rcsb_branched_instance_feature_summary.maximum_length";
        MaximumValue: "rcsb_branched_instance_feature_summary.maximum_value";
        MinimumLength: "rcsb_branched_instance_feature_summary.minimum_length";
        MinimumValue: "rcsb_branched_instance_feature_summary.minimum_value";
        Type: "rcsb_branched_instance_feature_summary.type";
    };
    static readonly RcsbBranchedStructConn: {
        ConnectPartner: {
            LabelAltId: "rcsb_branched_struct_conn.connect_partner.label_alt_id";
            LabelAsymId: "rcsb_branched_struct_conn.connect_partner.label_asym_id";
            LabelAtomId: "rcsb_branched_struct_conn.connect_partner.label_atom_id";
            LabelCompId: "rcsb_branched_struct_conn.connect_partner.label_comp_id";
            LabelSeqId: "rcsb_branched_struct_conn.connect_partner.label_seq_id";
            Symmetry: "rcsb_branched_struct_conn.connect_partner.symmetry";
        };
        ConnectTarget: {
            AuthAsymId: "rcsb_branched_struct_conn.connect_target.auth_asym_id";
            AuthSeqId: "rcsb_branched_struct_conn.connect_target.auth_seq_id";
            LabelAltId: "rcsb_branched_struct_conn.connect_target.label_alt_id";
            LabelAsymId: "rcsb_branched_struct_conn.connect_target.label_asym_id";
            LabelAtomId: "rcsb_branched_struct_conn.connect_target.label_atom_id";
            LabelCompId: "rcsb_branched_struct_conn.connect_target.label_comp_id";
            LabelSeqId: "rcsb_branched_struct_conn.connect_target.label_seq_id";
            Symmetry: "rcsb_branched_struct_conn.connect_target.symmetry";
        };
        ConnectType: "rcsb_branched_struct_conn.connect_type";
        Description: "rcsb_branched_struct_conn.description";
        DistValue: "rcsb_branched_struct_conn.dist_value";
        Id: "rcsb_branched_struct_conn.id";
        OrdinalId: "rcsb_branched_struct_conn.ordinal_id";
        Role: "rcsb_branched_struct_conn.role";
        ValueOrder: "rcsb_branched_struct_conn.value_order";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbLigandNeighbors: {
        AltId: "rcsb_ligand_neighbors.alt_id";
        AtomId: "rcsb_ligand_neighbors.atom_id";
        AuthSeqId: "rcsb_ligand_neighbors.auth_seq_id";
        CompId: "rcsb_ligand_neighbors.comp_id";
        Distance: "rcsb_ligand_neighbors.distance";
        LigandAltId: "rcsb_ligand_neighbors.ligand_alt_id";
        LigandAsymId: "rcsb_ligand_neighbors.ligand_asym_id";
        LigandAtomId: "rcsb_ligand_neighbors.ligand_atom_id";
        LigandCompId: "rcsb_ligand_neighbors.ligand_comp_id";
        LigandEntityId: "rcsb_ligand_neighbors.ligand_entity_id";
        LigandIsBound: "rcsb_ligand_neighbors.ligand_is_bound";
        LigandModelId: "rcsb_ligand_neighbors.ligand_model_id";
        SeqId: "rcsb_ligand_neighbors.seq_id";
    };
    static readonly StructAsym: {
        PdbxPdbId: "struct_asym.pdbx_PDB_id";
        PdbxAltId: "struct_asym.pdbx_alt_id";
        PdbxOrder: "struct_asym.pdbx_order";
        PdbxType: "struct_asym.pdbx_type";
    };
}
export declare class CoreChemComp {
    static readonly Drugbank: {
        DrugbankContainerIdentifiers: {
            DrugbankId: "drugbank.drugbank_container_identifiers.drugbank_id";
        };
        DrugbankInfo: {
            AffectedOrganisms: "drugbank.drugbank_info.affected_organisms";
            AtcCodes: "drugbank.drugbank_info.atc_codes";
            BrandNames: "drugbank.drugbank_info.brand_names";
            CasNumber: "drugbank.drugbank_info.cas_number";
            Description: "drugbank.drugbank_info.description";
            DrugCategories: "drugbank.drugbank_info.drug_categories";
            DrugGroups: "drugbank.drugbank_info.drug_groups";
            DrugProducts: {
                Approved: "drugbank.drugbank_info.drug_products.approved";
                Country: "drugbank.drugbank_info.drug_products.country";
                EndedMarketingOn: "drugbank.drugbank_info.drug_products.ended_marketing_on";
                Name: "drugbank.drugbank_info.drug_products.name";
                Source: "drugbank.drugbank_info.drug_products.source";
                StartedMarketingOn: "drugbank.drugbank_info.drug_products.started_marketing_on";
            };
            DrugbankId: "drugbank.drugbank_info.drugbank_id";
            Indication: "drugbank.drugbank_info.indication";
            MechanismOfAction: "drugbank.drugbank_info.mechanism_of_action";
            Name: "drugbank.drugbank_info.name";
            Pharmacology: "drugbank.drugbank_info.pharmacology";
            Synonyms: "drugbank.drugbank_info.synonyms";
        };
        DrugbankTarget: {
            InteractionType: "drugbank.drugbank_target.interaction_type";
            Name: "drugbank.drugbank_target.name";
            Ordinal: "drugbank.drugbank_target.ordinal";
            OrganismCommonName: "drugbank.drugbank_target.organism_common_name";
            ReferenceDatabaseAccessionCode: "drugbank.drugbank_target.reference_database_accession_code";
            ReferenceDatabaseName: "drugbank.drugbank_target.reference_database_name";
            SeqOneLetterCode: "drugbank.drugbank_target.seq_one_letter_code";
            TargetActions: "drugbank.drugbank_target.target_actions";
        };
    };
    static readonly PdbxChemCompAudit: {
        ActionType: "pdbx_chem_comp_audit.action_type";
        CompId: "pdbx_chem_comp_audit.comp_id";
        Date: "pdbx_chem_comp_audit.date";
        Details: "pdbx_chem_comp_audit.details";
        Ordinal: "pdbx_chem_comp_audit.ordinal";
    };
    static readonly PdbxChemCompDescriptor: {
        CompId: "pdbx_chem_comp_descriptor.comp_id";
        Descriptor: "pdbx_chem_comp_descriptor.descriptor";
        Program: "pdbx_chem_comp_descriptor.program";
        ProgramVersion: "pdbx_chem_comp_descriptor.program_version";
        Type: "pdbx_chem_comp_descriptor.type";
    };
    static readonly PdbxChemCompFeature: {
        CompId: "pdbx_chem_comp_feature.comp_id";
        Source: "pdbx_chem_comp_feature.source";
        Type: "pdbx_chem_comp_feature.type";
        Value: "pdbx_chem_comp_feature.value";
    };
    static readonly PdbxChemCompIdentifier: {
        CompId: "pdbx_chem_comp_identifier.comp_id";
        Identifier: "pdbx_chem_comp_identifier.identifier";
        Program: "pdbx_chem_comp_identifier.program";
        ProgramVersion: "pdbx_chem_comp_identifier.program_version";
        Type: "pdbx_chem_comp_identifier.type";
    };
    static readonly PdbxFamilyPrdAudit: {
        ActionType: "pdbx_family_prd_audit.action_type";
        Annotator: "pdbx_family_prd_audit.annotator";
        Date: "pdbx_family_prd_audit.date";
        Details: "pdbx_family_prd_audit.details";
        FamilyPrdId: "pdbx_family_prd_audit.family_prd_id";
        ProcessingSite: "pdbx_family_prd_audit.processing_site";
    };
    static readonly PdbxPrdAudit: {
        ActionType: "pdbx_prd_audit.action_type";
        Annotator: "pdbx_prd_audit.annotator";
        Date: "pdbx_prd_audit.date";
        Details: "pdbx_prd_audit.details";
        PrdId: "pdbx_prd_audit.prd_id";
        ProcessingSite: "pdbx_prd_audit.processing_site";
    };
    static readonly PdbxReferenceEntityList: {
        ComponentId: "pdbx_reference_entity_list.component_id";
        Details: "pdbx_reference_entity_list.details";
        PrdId: "pdbx_reference_entity_list.prd_id";
        RefEntityId: "pdbx_reference_entity_list.ref_entity_id";
        Type: "pdbx_reference_entity_list.type";
    };
    static readonly PdbxReferenceEntityPoly: {
        DbCode: "pdbx_reference_entity_poly.db_code";
        DbName: "pdbx_reference_entity_poly.db_name";
        PrdId: "pdbx_reference_entity_poly.prd_id";
        RefEntityId: "pdbx_reference_entity_poly.ref_entity_id";
        Type: "pdbx_reference_entity_poly.type";
    };
    static readonly PdbxReferenceEntityPolyLink: {
        AtomId1: "pdbx_reference_entity_poly_link.atom_id_1";
        AtomId2: "pdbx_reference_entity_poly_link.atom_id_2";
        CompId1: "pdbx_reference_entity_poly_link.comp_id_1";
        CompId2: "pdbx_reference_entity_poly_link.comp_id_2";
        ComponentId: "pdbx_reference_entity_poly_link.component_id";
        EntitySeqNum1: "pdbx_reference_entity_poly_link.entity_seq_num_1";
        EntitySeqNum2: "pdbx_reference_entity_poly_link.entity_seq_num_2";
        LinkId: "pdbx_reference_entity_poly_link.link_id";
        PrdId: "pdbx_reference_entity_poly_link.prd_id";
        RefEntityId: "pdbx_reference_entity_poly_link.ref_entity_id";
        ValueOrder: "pdbx_reference_entity_poly_link.value_order";
    };
    static readonly PdbxReferenceEntityPolySeq: {
        Hetero: "pdbx_reference_entity_poly_seq.hetero";
        MonId: "pdbx_reference_entity_poly_seq.mon_id";
        Num: "pdbx_reference_entity_poly_seq.num";
        Observed: "pdbx_reference_entity_poly_seq.observed";
        ParentMonId: "pdbx_reference_entity_poly_seq.parent_mon_id";
        PrdId: "pdbx_reference_entity_poly_seq.prd_id";
        RefEntityId: "pdbx_reference_entity_poly_seq.ref_entity_id";
    };
    static readonly PdbxReferenceEntitySequence: {
        NrpFlag: "pdbx_reference_entity_sequence.NRP_flag";
        OneLetterCodes: "pdbx_reference_entity_sequence.one_letter_codes";
        PrdId: "pdbx_reference_entity_sequence.prd_id";
        RefEntityId: "pdbx_reference_entity_sequence.ref_entity_id";
        Type: "pdbx_reference_entity_sequence.type";
    };
    static readonly PdbxReferenceEntitySrcNat: {
        Atcc: "pdbx_reference_entity_src_nat.atcc";
        DbCode: "pdbx_reference_entity_src_nat.db_code";
        DbName: "pdbx_reference_entity_src_nat.db_name";
        Ordinal: "pdbx_reference_entity_src_nat.ordinal";
        OrganismScientific: "pdbx_reference_entity_src_nat.organism_scientific";
        PrdId: "pdbx_reference_entity_src_nat.prd_id";
        RefEntityId: "pdbx_reference_entity_src_nat.ref_entity_id";
        Source: "pdbx_reference_entity_src_nat.source";
        SourceId: "pdbx_reference_entity_src_nat.source_id";
        Taxid: "pdbx_reference_entity_src_nat.taxid";
    };
    static readonly PdbxReferenceMolecule: {
        ChemCompId: "pdbx_reference_molecule.chem_comp_id";
        Class: "pdbx_reference_molecule.class";
        ClassEvidenceCode: "pdbx_reference_molecule.class_evidence_code";
        CompoundDetails: "pdbx_reference_molecule.compound_details";
        Description: "pdbx_reference_molecule.description";
        Formula: "pdbx_reference_molecule.formula";
        FormulaWeight: "pdbx_reference_molecule.formula_weight";
        Name: "pdbx_reference_molecule.name";
        PrdId: "pdbx_reference_molecule.prd_id";
        ReleaseStatus: "pdbx_reference_molecule.release_status";
        ReplacedBy: "pdbx_reference_molecule.replaced_by";
        Replaces: "pdbx_reference_molecule.replaces";
        RepresentAs: "pdbx_reference_molecule.represent_as";
        RepresentativePdbIdCode: "pdbx_reference_molecule.representative_PDB_id_code";
        Type: "pdbx_reference_molecule.type";
        TypeEvidenceCode: "pdbx_reference_molecule.type_evidence_code";
    };
    static readonly PdbxReferenceMoleculeAnnotation: {
        FamilyPrdId: "pdbx_reference_molecule_annotation.family_prd_id";
        Ordinal: "pdbx_reference_molecule_annotation.ordinal";
        PrdId: "pdbx_reference_molecule_annotation.prd_id";
        Source: "pdbx_reference_molecule_annotation.source";
        Text: "pdbx_reference_molecule_annotation.text";
        Type: "pdbx_reference_molecule_annotation.type";
    };
    static readonly PdbxReferenceMoleculeDetails: {
        FamilyPrdId: "pdbx_reference_molecule_details.family_prd_id";
        Ordinal: "pdbx_reference_molecule_details.ordinal";
        Source: "pdbx_reference_molecule_details.source";
        SourceId: "pdbx_reference_molecule_details.source_id";
        Text: "pdbx_reference_molecule_details.text";
    };
    static readonly PdbxReferenceMoleculeFamily: {
        FamilyPrdId: "pdbx_reference_molecule_family.family_prd_id";
        Name: "pdbx_reference_molecule_family.name";
        ReleaseStatus: "pdbx_reference_molecule_family.release_status";
        ReplacedBy: "pdbx_reference_molecule_family.replaced_by";
        Replaces: "pdbx_reference_molecule_family.replaces";
    };
    static readonly PdbxReferenceMoleculeFeatures: {
        FamilyPrdId: "pdbx_reference_molecule_features.family_prd_id";
        Ordinal: "pdbx_reference_molecule_features.ordinal";
        PrdId: "pdbx_reference_molecule_features.prd_id";
        Source: "pdbx_reference_molecule_features.source";
        SourceOrdinal: "pdbx_reference_molecule_features.source_ordinal";
        Type: "pdbx_reference_molecule_features.type";
        Value: "pdbx_reference_molecule_features.value";
    };
    static readonly PdbxReferenceMoleculeList: {
        FamilyPrdId: "pdbx_reference_molecule_list.family_prd_id";
        PrdId: "pdbx_reference_molecule_list.prd_id";
    };
    static readonly PdbxReferenceMoleculeRelatedStructures: {
        CitationId: "pdbx_reference_molecule_related_structures.citation_id";
        DbAccession: "pdbx_reference_molecule_related_structures.db_accession";
        DbCode: "pdbx_reference_molecule_related_structures.db_code";
        DbName: "pdbx_reference_molecule_related_structures.db_name";
        FamilyPrdId: "pdbx_reference_molecule_related_structures.family_prd_id";
        Formula: "pdbx_reference_molecule_related_structures.formula";
        Name: "pdbx_reference_molecule_related_structures.name";
        Ordinal: "pdbx_reference_molecule_related_structures.ordinal";
    };
    static readonly PdbxReferenceMoleculeSynonyms: {
        FamilyPrdId: "pdbx_reference_molecule_synonyms.family_prd_id";
        Name: "pdbx_reference_molecule_synonyms.name";
        Ordinal: "pdbx_reference_molecule_synonyms.ordinal";
        PrdId: "pdbx_reference_molecule_synonyms.prd_id";
        Source: "pdbx_reference_molecule_synonyms.source";
    };
    static readonly RcsbBirdCitation: {
        Id: "rcsb_bird_citation.id";
        JournalAbbrev: "rcsb_bird_citation.journal_abbrev";
        JournalVolume: "rcsb_bird_citation.journal_volume";
        PageFirst: "rcsb_bird_citation.page_first";
        PageLast: "rcsb_bird_citation.page_last";
        PdbxDatabaseIdDoi: "rcsb_bird_citation.pdbx_database_id_DOI";
        PdbxDatabaseIdPubMed: "rcsb_bird_citation.pdbx_database_id_PubMed";
        RcsbAuthors: "rcsb_bird_citation.rcsb_authors";
        Title: "rcsb_bird_citation.title";
        Year: "rcsb_bird_citation.year";
    };
    static readonly RcsbChemCompAnnotation: {
        AnnotationId: "rcsb_chem_comp_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_chem_comp_annotation.annotation_lineage.depth";
            Id: "rcsb_chem_comp_annotation.annotation_lineage.id";
            Name: "rcsb_chem_comp_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_chem_comp_annotation.assignment_version";
        Description: "rcsb_chem_comp_annotation.description";
        Name: "rcsb_chem_comp_annotation.name";
        ProvenanceSource: "rcsb_chem_comp_annotation.provenance_source";
        Type: "rcsb_chem_comp_annotation.type";
    };
    static readonly RcsbChemCompContainerIdentifiers: {
        AtcCodes: "rcsb_chem_comp_container_identifiers.atc_codes";
        CompId: "rcsb_chem_comp_container_identifiers.comp_id";
        DrugbankId: "rcsb_chem_comp_container_identifiers.drugbank_id";
        PrdId: "rcsb_chem_comp_container_identifiers.prd_id";
        RcsbId: "rcsb_chem_comp_container_identifiers.rcsb_id";
        SubcomponentIds: "rcsb_chem_comp_container_identifiers.subcomponent_ids";
    };
    static readonly RcsbChemCompDescriptor: {
        InChI: "rcsb_chem_comp_descriptor.InChI";
        InChIKey: "rcsb_chem_comp_descriptor.InChIKey";
        Smiles: "rcsb_chem_comp_descriptor.SMILES";
        SmilesStereo: "rcsb_chem_comp_descriptor.SMILES_stereo";
        CompId: "rcsb_chem_comp_descriptor.comp_id";
    };
    static readonly RcsbChemCompInfo: {
        AtomCount: "rcsb_chem_comp_info.atom_count";
        AtomCountChiral: "rcsb_chem_comp_info.atom_count_chiral";
        AtomCountHeavy: "rcsb_chem_comp_info.atom_count_heavy";
        BondCount: "rcsb_chem_comp_info.bond_count";
        BondCountAromatic: "rcsb_chem_comp_info.bond_count_aromatic";
        CompId: "rcsb_chem_comp_info.comp_id";
        InitialDepositionDate: "rcsb_chem_comp_info.initial_deposition_date";
        InitialReleaseDate: "rcsb_chem_comp_info.initial_release_date";
        ReleaseStatus: "rcsb_chem_comp_info.release_status";
        RevisionDate: "rcsb_chem_comp_info.revision_date";
    };
    static readonly RcsbChemCompRelated: {
        CompId: "rcsb_chem_comp_related.comp_id";
        Ordinal: "rcsb_chem_comp_related.ordinal";
        RelatedMappingMethod: "rcsb_chem_comp_related.related_mapping_method";
        ResourceAccessionCode: "rcsb_chem_comp_related.resource_accession_code";
        ResourceName: "rcsb_chem_comp_related.resource_name";
    };
    static readonly RcsbChemCompSynonyms: {
        CompId: "rcsb_chem_comp_synonyms.comp_id";
        Name: "rcsb_chem_comp_synonyms.name";
        Ordinal: "rcsb_chem_comp_synonyms.ordinal";
        ProvenanceSource: "rcsb_chem_comp_synonyms.provenance_source";
        Type: "rcsb_chem_comp_synonyms.type";
    };
    static readonly RcsbChemCompTarget: {
        CompId: "rcsb_chem_comp_target.comp_id";
        InteractionType: "rcsb_chem_comp_target.interaction_type";
        Name: "rcsb_chem_comp_target.name";
        Ordinal: "rcsb_chem_comp_target.ordinal";
        ProvenanceSource: "rcsb_chem_comp_target.provenance_source";
        ReferenceDatabaseAccessionCode: "rcsb_chem_comp_target.reference_database_accession_code";
        ReferenceDatabaseName: "rcsb_chem_comp_target.reference_database_name";
        TargetActions: "rcsb_chem_comp_target.target_actions";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbSchemaContainerIdentifiers: {
        CollectionName: "rcsb_schema_container_identifiers.collection_name";
        CollectionSchemaVersion: "rcsb_schema_container_identifiers.collection_schema_version";
        SchemaName: "rcsb_schema_container_identifiers.schema_name";
    };
}
export declare class CoreEntry {
    static readonly AuditAuthor: {
        IdentifierOrcid: "audit_author.identifier_ORCID";
        Name: "audit_author.name";
        PdbxOrdinal: "audit_author.pdbx_ordinal";
    };
    static readonly Cell: {
        ZPdb: "cell.Z_PDB";
        AngleAlpha: "cell.angle_alpha";
        AngleBeta: "cell.angle_beta";
        AngleGamma: "cell.angle_gamma";
        FormulaUnitsZ: "cell.formula_units_Z";
        LengthA: "cell.length_a";
        LengthB: "cell.length_b";
        LengthC: "cell.length_c";
        PdbxUniqueAxis: "cell.pdbx_unique_axis";
        Volume: "cell.volume";
    };
    static readonly Citation: {
        BookIdIsbn: "citation.book_id_ISBN";
        BookPublisher: "citation.book_publisher";
        BookPublisherCity: "citation.book_publisher_city";
        BookTitle: "citation.book_title";
        CoordinateLinkage: "citation.coordinate_linkage";
        Country: "citation.country";
        Id: "citation.id";
        JournalAbbrev: "citation.journal_abbrev";
        JournalFull: "citation.journal_full";
        JournalIdAstm: "citation.journal_id_ASTM";
        JournalIdCsd: "citation.journal_id_CSD";
        JournalIdIssn: "citation.journal_id_ISSN";
        JournalIssue: "citation.journal_issue";
        JournalVolume: "citation.journal_volume";
        Language: "citation.language";
        PageFirst: "citation.page_first";
        PageLast: "citation.page_last";
        PdbxDatabaseIdDoi: "citation.pdbx_database_id_DOI";
        PdbxDatabaseIdPubMed: "citation.pdbx_database_id_PubMed";
        RcsbAuthors: "citation.rcsb_authors";
        RcsbIsPrimary: "citation.rcsb_is_primary";
        RcsbJournalAbbrev: "citation.rcsb_journal_abbrev";
        Title: "citation.title";
        UnpublishedFlag: "citation.unpublished_flag";
        Year: "citation.year";
    };
    static readonly Database2: {
        DatabaseCode: "database_2.database_code";
        DatabaseId: "database_2.database_id";
        PdbxDoi: "database_2.pdbx_DOI";
        PdbxDatabaseAccession: "database_2.pdbx_database_accession";
    };
    static readonly Diffrn: {
        AmbientPressure: "diffrn.ambient_pressure";
        AmbientTemp: "diffrn.ambient_temp";
        AmbientTempDetails: "diffrn.ambient_temp_details";
        CrystalId: "diffrn.crystal_id";
        CrystalSupport: "diffrn.crystal_support";
        Details: "diffrn.details";
        Id: "diffrn.id";
        PdbxSerialCrystalExperiment: "diffrn.pdbx_serial_crystal_experiment";
    };
    static readonly DiffrnDetector: {
        Details: "diffrn_detector.details";
        Detector: "diffrn_detector.detector";
        DiffrnId: "diffrn_detector.diffrn_id";
        PdbxCollectionDate: "diffrn_detector.pdbx_collection_date";
        PdbxFrequency: "diffrn_detector.pdbx_frequency";
        Type: "diffrn_detector.type";
    };
    static readonly DiffrnRadiation: {
        Collimation: "diffrn_radiation.collimation";
        DiffrnId: "diffrn_radiation.diffrn_id";
        Monochromator: "diffrn_radiation.monochromator";
        PdbxDiffrnProtocol: "diffrn_radiation.pdbx_diffrn_protocol";
        PdbxMonochromaticOrLaueML: "diffrn_radiation.pdbx_monochromatic_or_laue_m_l";
        PdbxScatteringType: "diffrn_radiation.pdbx_scattering_type";
        PdbxWavelength: "diffrn_radiation.pdbx_wavelength";
        PdbxWavelengthList: "diffrn_radiation.pdbx_wavelength_list";
        Type: "diffrn_radiation.type";
        WavelengthId: "diffrn_radiation.wavelength_id";
    };
    static readonly DiffrnSource: {
        Details: "diffrn_source.details";
        DiffrnId: "diffrn_source.diffrn_id";
        PdbxSynchrotronBeamline: "diffrn_source.pdbx_synchrotron_beamline";
        PdbxSynchrotronSite: "diffrn_source.pdbx_synchrotron_site";
        PdbxWavelength: "diffrn_source.pdbx_wavelength";
        PdbxWavelengthList: "diffrn_source.pdbx_wavelength_list";
        Source: "diffrn_source.source";
        Type: "diffrn_source.type";
    };
    static readonly Em2DCrystalEntity: {
        AngleGamma: "em_2d_crystal_entity.angle_gamma";
        CSamplingLength: "em_2d_crystal_entity.c_sampling_length";
        Id: "em_2d_crystal_entity.id";
        ImageProcessingId: "em_2d_crystal_entity.image_processing_id";
        LengthA: "em_2d_crystal_entity.length_a";
        LengthB: "em_2d_crystal_entity.length_b";
        LengthC: "em_2d_crystal_entity.length_c";
        SpaceGroupNameHM: "em_2d_crystal_entity.space_group_name_H_M";
    };
    static readonly Em3DCrystalEntity: {
        AngleAlpha: "em_3d_crystal_entity.angle_alpha";
        AngleBeta: "em_3d_crystal_entity.angle_beta";
        AngleGamma: "em_3d_crystal_entity.angle_gamma";
        Id: "em_3d_crystal_entity.id";
        ImageProcessingId: "em_3d_crystal_entity.image_processing_id";
        LengthA: "em_3d_crystal_entity.length_a";
        LengthB: "em_3d_crystal_entity.length_b";
        LengthC: "em_3d_crystal_entity.length_c";
        SpaceGroupName: "em_3d_crystal_entity.space_group_name";
        SpaceGroupNum: "em_3d_crystal_entity.space_group_num";
    };
    static readonly Em3DFitting: {
        Details: "em_3d_fitting.details";
        Id: "em_3d_fitting.id";
        Method: "em_3d_fitting.method";
        OverallBValue: "em_3d_fitting.overall_b_value";
        RefProtocol: "em_3d_fitting.ref_protocol";
        RefSpace: "em_3d_fitting.ref_space";
        TargetCriteria: "em_3d_fitting.target_criteria";
    };
    static readonly Em3DFittingList: {
        DFittingId: "em_3d_fitting_list._3d_fitting_id";
        Details: "em_3d_fitting_list.details";
        Id: "em_3d_fitting_list.id";
        PdbChainId: "em_3d_fitting_list.pdb_chain_id";
        PdbChainResidueRange: "em_3d_fitting_list.pdb_chain_residue_range";
        PdbEntryId: "em_3d_fitting_list.pdb_entry_id";
    };
    static readonly Em3DReconstruction: {
        ActualPixelSize: "em_3d_reconstruction.actual_pixel_size";
        Algorithm: "em_3d_reconstruction.algorithm";
        Details: "em_3d_reconstruction.details";
        Id: "em_3d_reconstruction.id";
        ImageProcessingId: "em_3d_reconstruction.image_processing_id";
        MagnificationCalibration: "em_3d_reconstruction.magnification_calibration";
        Method: "em_3d_reconstruction.method";
        NominalPixelSize: "em_3d_reconstruction.nominal_pixel_size";
        NumClassAverages: "em_3d_reconstruction.num_class_averages";
        NumParticles: "em_3d_reconstruction.num_particles";
        RefinementType: "em_3d_reconstruction.refinement_type";
        Resolution: "em_3d_reconstruction.resolution";
        ResolutionMethod: "em_3d_reconstruction.resolution_method";
        SymmetryType: "em_3d_reconstruction.symmetry_type";
    };
    static readonly EmCtfCorrection: {
        Details: "em_ctf_correction.details";
        EmImageProcessingId: "em_ctf_correction.em_image_processing_id";
        Id: "em_ctf_correction.id";
        Type: "em_ctf_correction.type";
    };
    static readonly EmDiffraction: {
        CameraLength: "em_diffraction.camera_length";
        Id: "em_diffraction.id";
        ImagingId: "em_diffraction.imaging_id";
        TiltAngleList: "em_diffraction.tilt_angle_list";
    };
    static readonly EmDiffractionShell: {
        EmDiffractionStatsId: "em_diffraction_shell.em_diffraction_stats_id";
        FourierSpaceCoverage: "em_diffraction_shell.fourier_space_coverage";
        HighResolution: "em_diffraction_shell.high_resolution";
        Id: "em_diffraction_shell.id";
        LowResolution: "em_diffraction_shell.low_resolution";
        Multiplicity: "em_diffraction_shell.multiplicity";
        NumStructureFactors: "em_diffraction_shell.num_structure_factors";
        PhaseResidual: "em_diffraction_shell.phase_residual";
    };
    static readonly EmDiffractionStats: {
        Details: "em_diffraction_stats.details";
        FourierSpaceCoverage: "em_diffraction_stats.fourier_space_coverage";
        HighResolution: "em_diffraction_stats.high_resolution";
        Id: "em_diffraction_stats.id";
        ImageProcessingId: "em_diffraction_stats.image_processing_id";
        NumIntensitiesMeasured: "em_diffraction_stats.num_intensities_measured";
        NumStructureFactors: "em_diffraction_stats.num_structure_factors";
        OverallPhaseError: "em_diffraction_stats.overall_phase_error";
        OverallPhaseResidual: "em_diffraction_stats.overall_phase_residual";
        PhaseErrorRejectionCriteria: "em_diffraction_stats.phase_error_rejection_criteria";
        RMerge: "em_diffraction_stats.r_merge";
        RSym: "em_diffraction_stats.r_sym";
    };
    static readonly EmEmbedding: {
        Details: "em_embedding.details";
        Id: "em_embedding.id";
        Material: "em_embedding.material";
        SpecimenId: "em_embedding.specimen_id";
    };
    static readonly EmEntityAssembly: {
        Details: "em_entity_assembly.details";
        EntityIdList: "em_entity_assembly.entity_id_list";
        Id: "em_entity_assembly.id";
        Name: "em_entity_assembly.name";
        OligomericDetails: "em_entity_assembly.oligomeric_details";
        ParentId: "em_entity_assembly.parent_id";
        Source: "em_entity_assembly.source";
        Synonym: "em_entity_assembly.synonym";
        Type: "em_entity_assembly.type";
    };
    static readonly EmExperiment: {
        AggregationState: "em_experiment.aggregation_state";
        EntityAssemblyId: "em_experiment.entity_assembly_id";
        Id: "em_experiment.id";
        ReconstructionMethod: "em_experiment.reconstruction_method";
    };
    static readonly EmHelicalEntity: {
        AngularRotationPerSubunit: "em_helical_entity.angular_rotation_per_subunit";
        AxialRisePerSubunit: "em_helical_entity.axial_rise_per_subunit";
        AxialSymmetry: "em_helical_entity.axial_symmetry";
        Details: "em_helical_entity.details";
        Id: "em_helical_entity.id";
        ImageProcessingId: "em_helical_entity.image_processing_id";
    };
    static readonly EmImageRecording: {
        AverageExposureTime: "em_image_recording.average_exposure_time";
        AvgElectronDosePerImage: "em_image_recording.avg_electron_dose_per_image";
        Details: "em_image_recording.details";
        DetectorMode: "em_image_recording.detector_mode";
        FilmOrDetectorModel: "em_image_recording.film_or_detector_model";
        Id: "em_image_recording.id";
        ImagingId: "em_image_recording.imaging_id";
        NumDiffractionImages: "em_image_recording.num_diffraction_images";
        NumGridsImaged: "em_image_recording.num_grids_imaged";
        NumRealImages: "em_image_recording.num_real_images";
    };
    static readonly EmImaging: {
        AcceleratingVoltage: "em_imaging.accelerating_voltage";
        AlignmentProcedure: "em_imaging.alignment_procedure";
        Astigmatism: "em_imaging.astigmatism";
        C2ApertureDiameter: "em_imaging.c2_aperture_diameter";
        CalibratedDefocusMax: "em_imaging.calibrated_defocus_max";
        CalibratedDefocusMin: "em_imaging.calibrated_defocus_min";
        CalibratedMagnification: "em_imaging.calibrated_magnification";
        Cryogen: "em_imaging.cryogen";
        Date: "em_imaging.date";
        Details: "em_imaging.details";
        DetectorDistance: "em_imaging.detector_distance";
        ElectronBeamTiltParams: "em_imaging.electron_beam_tilt_params";
        ElectronSource: "em_imaging.electron_source";
        Id: "em_imaging.id";
        IlluminationMode: "em_imaging.illumination_mode";
        MicroscopeModel: "em_imaging.microscope_model";
        Mode: "em_imaging.mode";
        NominalCs: "em_imaging.nominal_cs";
        NominalDefocusMax: "em_imaging.nominal_defocus_max";
        NominalDefocusMin: "em_imaging.nominal_defocus_min";
        NominalMagnification: "em_imaging.nominal_magnification";
        RecordingTemperatureMaximum: "em_imaging.recording_temperature_maximum";
        RecordingTemperatureMinimum: "em_imaging.recording_temperature_minimum";
        ResidualTilt: "em_imaging.residual_tilt";
        SpecimenHolderModel: "em_imaging.specimen_holder_model";
        SpecimenHolderType: "em_imaging.specimen_holder_type";
        SpecimenId: "em_imaging.specimen_id";
        Temperature: "em_imaging.temperature";
        TiltAngleMax: "em_imaging.tilt_angle_max";
        TiltAngleMin: "em_imaging.tilt_angle_min";
    };
    static readonly EmParticleSelection: {
        Details: "em_particle_selection.details";
        Id: "em_particle_selection.id";
        ImageProcessingId: "em_particle_selection.image_processing_id";
        NumParticlesSelected: "em_particle_selection.num_particles_selected";
    };
    static readonly EmSingleParticleEntity: {
        Id: "em_single_particle_entity.id";
        ImageProcessingId: "em_single_particle_entity.image_processing_id";
        PointSymmetry: "em_single_particle_entity.point_symmetry";
    };
    static readonly EmSoftware: {
        Category: "em_software.category";
        Details: "em_software.details";
        FittingId: "em_software.fitting_id";
        Id: "em_software.id";
        ImageProcessingId: "em_software.image_processing_id";
        ImagingId: "em_software.imaging_id";
        Name: "em_software.name";
        Version: "em_software.version";
    };
    static readonly EmSpecimen: {
        Concentration: "em_specimen.concentration";
        Details: "em_specimen.details";
        EmbeddingApplied: "em_specimen.embedding_applied";
        ExperimentId: "em_specimen.experiment_id";
        Id: "em_specimen.id";
        ShadowingApplied: "em_specimen.shadowing_applied";
        StainingApplied: "em_specimen.staining_applied";
        VitrificationApplied: "em_specimen.vitrification_applied";
    };
    static readonly EmStaining: {
        Details: "em_staining.details";
        Id: "em_staining.id";
        Material: "em_staining.material";
        SpecimenId: "em_staining.specimen_id";
        Type: "em_staining.type";
    };
    static readonly EmVitrification: {
        ChamberTemperature: "em_vitrification.chamber_temperature";
        CryogenName: "em_vitrification.cryogen_name";
        Details: "em_vitrification.details";
        Humidity: "em_vitrification.humidity";
        Id: "em_vitrification.id";
        Instrument: "em_vitrification.instrument";
        Method: "em_vitrification.method";
        SpecimenId: "em_vitrification.specimen_id";
        Temp: "em_vitrification.temp";
        TimeResolvedState: "em_vitrification.time_resolved_state";
    };
    static readonly Exptl: {
        CrystalsNumber: "exptl.crystals_number";
        Details: "exptl.details";
        Method: "exptl.method";
        MethodDetails: "exptl.method_details";
    };
    static readonly ExptlCrystal: {
        Colour: "exptl_crystal.colour";
        DensityMatthews: "exptl_crystal.density_Matthews";
        DensityMeas: "exptl_crystal.density_meas";
        DensityPercentSol: "exptl_crystal.density_percent_sol";
        Description: "exptl_crystal.description";
        Id: "exptl_crystal.id";
        PdbxMosaicity: "exptl_crystal.pdbx_mosaicity";
        PdbxMosaicityEsd: "exptl_crystal.pdbx_mosaicity_esd";
        Preparation: "exptl_crystal.preparation";
    };
    static readonly ExptlCrystalGrow: {
        CrystalId: "exptl_crystal_grow.crystal_id";
        Details: "exptl_crystal_grow.details";
        Method: "exptl_crystal_grow.method";
        PH: "exptl_crystal_grow.pH";
        PdbxDetails: "exptl_crystal_grow.pdbx_details";
        PdbxPHRange: "exptl_crystal_grow.pdbx_pH_range";
        Temp: "exptl_crystal_grow.temp";
        TempDetails: "exptl_crystal_grow.temp_details";
    };
    static readonly MaData: {
        ContentType: "ma_data.content_type";
        ContentTypeOtherDetails: "ma_data.content_type_other_details";
        Id: "ma_data.id";
        Name: "ma_data.name";
    };
    static readonly PdbxSgProject: {
        FullNameOfCenter: "pdbx_SG_project.full_name_of_center";
        Id: "pdbx_SG_project.id";
        InitialOfCenter: "pdbx_SG_project.initial_of_center";
        ProjectName: "pdbx_SG_project.project_name";
    };
    static readonly PdbxAuditRevisionCategory: {
        Category: "pdbx_audit_revision_category.category";
        DataContentType: "pdbx_audit_revision_category.data_content_type";
        Ordinal: "pdbx_audit_revision_category.ordinal";
        RevisionOrdinal: "pdbx_audit_revision_category.revision_ordinal";
    };
    static readonly PdbxAuditRevisionDetails: {
        DataContentType: "pdbx_audit_revision_details.data_content_type";
        Description: "pdbx_audit_revision_details.description";
        Details: "pdbx_audit_revision_details.details";
        Ordinal: "pdbx_audit_revision_details.ordinal";
        Provider: "pdbx_audit_revision_details.provider";
        RevisionOrdinal: "pdbx_audit_revision_details.revision_ordinal";
        Type: "pdbx_audit_revision_details.type";
    };
    static readonly PdbxAuditRevisionGroup: {
        DataContentType: "pdbx_audit_revision_group.data_content_type";
        Group: "pdbx_audit_revision_group.group";
        Ordinal: "pdbx_audit_revision_group.ordinal";
        RevisionOrdinal: "pdbx_audit_revision_group.revision_ordinal";
    };
    static readonly PdbxAuditRevisionHistory: {
        DataContentType: "pdbx_audit_revision_history.data_content_type";
        MajorRevision: "pdbx_audit_revision_history.major_revision";
        MinorRevision: "pdbx_audit_revision_history.minor_revision";
        Ordinal: "pdbx_audit_revision_history.ordinal";
        RevisionDate: "pdbx_audit_revision_history.revision_date";
    };
    static readonly PdbxAuditRevisionItem: {
        DataContentType: "pdbx_audit_revision_item.data_content_type";
        Item: "pdbx_audit_revision_item.item";
        Ordinal: "pdbx_audit_revision_item.ordinal";
        RevisionOrdinal: "pdbx_audit_revision_item.revision_ordinal";
    };
    static readonly PdbxAuditSupport: {
        Country: "pdbx_audit_support.country";
        FundingOrganization: "pdbx_audit_support.funding_organization";
        GrantNumber: "pdbx_audit_support.grant_number";
        Ordinal: "pdbx_audit_support.ordinal";
    };
    static readonly PdbxDatabasePdbObsSpr: {
        Date: "pdbx_database_PDB_obs_spr.date";
        Details: "pdbx_database_PDB_obs_spr.details";
        Id: "pdbx_database_PDB_obs_spr.id";
        PdbId: "pdbx_database_PDB_obs_spr.pdb_id";
        ReplacePdbId: "pdbx_database_PDB_obs_spr.replace_pdb_id";
    };
    static readonly PdbxDatabaseRelated: {
        ContentType: "pdbx_database_related.content_type";
        DbId: "pdbx_database_related.db_id";
        DbName: "pdbx_database_related.db_name";
        Details: "pdbx_database_related.details";
    };
    static readonly PdbxDatabaseStatus: {
        SgEntry: "pdbx_database_status.SG_entry";
        DepositSite: "pdbx_database_status.deposit_site";
        MethodsDevelopmentCategory: "pdbx_database_status.methods_development_category";
        PdbFormatCompatible: "pdbx_database_status.pdb_format_compatible";
        ProcessSite: "pdbx_database_status.process_site";
        RecvdInitialDepositionDate: "pdbx_database_status.recvd_initial_deposition_date";
        StatusCode: "pdbx_database_status.status_code";
        StatusCodeCs: "pdbx_database_status.status_code_cs";
        StatusCodeMr: "pdbx_database_status.status_code_mr";
        StatusCodeSf: "pdbx_database_status.status_code_sf";
    };
    static readonly PdbxDepositGroup: {
        GroupDescription: "pdbx_deposit_group.group_description";
        GroupId: "pdbx_deposit_group.group_id";
        GroupTitle: "pdbx_deposit_group.group_title";
        GroupType: "pdbx_deposit_group.group_type";
    };
    static readonly PdbxInitialRefinementModel: {
        AccessionCode: "pdbx_initial_refinement_model.accession_code";
        Details: "pdbx_initial_refinement_model.details";
        EntityIdList: "pdbx_initial_refinement_model.entity_id_list";
        Id: "pdbx_initial_refinement_model.id";
        SourceName: "pdbx_initial_refinement_model.source_name";
        Type: "pdbx_initial_refinement_model.type";
    };
    static readonly PdbxMoleculeFeatures: {
        Class: "pdbx_molecule_features.class";
        Details: "pdbx_molecule_features.details";
        Name: "pdbx_molecule_features.name";
        PrdId: "pdbx_molecule_features.prd_id";
        Type: "pdbx_molecule_features.type";
    };
    static readonly PdbxNmrDetails: {
        Text: "pdbx_nmr_details.text";
    };
    static readonly PdbxNmrEnsemble: {
        AverageConstraintViolationsPerResidue: "pdbx_nmr_ensemble.average_constraint_violations_per_residue";
        AverageConstraintsPerResidue: "pdbx_nmr_ensemble.average_constraints_per_residue";
        AverageDistanceConstraintViolation: "pdbx_nmr_ensemble.average_distance_constraint_violation";
        AverageTorsionAngleConstraintViolation: "pdbx_nmr_ensemble.average_torsion_angle_constraint_violation";
        ConformerSelectionCriteria: "pdbx_nmr_ensemble.conformer_selection_criteria";
        ConformersCalculatedTotalNumber: "pdbx_nmr_ensemble.conformers_calculated_total_number";
        ConformersSubmittedTotalNumber: "pdbx_nmr_ensemble.conformers_submitted_total_number";
        DistanceConstraintViolationMethod: "pdbx_nmr_ensemble.distance_constraint_violation_method";
        MaximumDistanceConstraintViolation: "pdbx_nmr_ensemble.maximum_distance_constraint_violation";
        MaximumLowerDistanceConstraintViolation: "pdbx_nmr_ensemble.maximum_lower_distance_constraint_violation";
        MaximumTorsionAngleConstraintViolation: "pdbx_nmr_ensemble.maximum_torsion_angle_constraint_violation";
        MaximumUpperDistanceConstraintViolation: "pdbx_nmr_ensemble.maximum_upper_distance_constraint_violation";
        RepresentativeConformer: "pdbx_nmr_ensemble.representative_conformer";
        TorsionAngleConstraintViolationMethod: "pdbx_nmr_ensemble.torsion_angle_constraint_violation_method";
    };
    static readonly PdbxNmrExptl: {
        ConditionsId: "pdbx_nmr_exptl.conditions_id";
        ExperimentId: "pdbx_nmr_exptl.experiment_id";
        SampleState: "pdbx_nmr_exptl.sample_state";
        SolutionId: "pdbx_nmr_exptl.solution_id";
        SpectrometerId: "pdbx_nmr_exptl.spectrometer_id";
        Type: "pdbx_nmr_exptl.type";
    };
    static readonly PdbxNmrExptlSampleConditions: {
        ConditionsId: "pdbx_nmr_exptl_sample_conditions.conditions_id";
        Details: "pdbx_nmr_exptl_sample_conditions.details";
        IonicStrength: "pdbx_nmr_exptl_sample_conditions.ionic_strength";
        IonicStrengthErr: "pdbx_nmr_exptl_sample_conditions.ionic_strength_err";
        IonicStrengthUnits: "pdbx_nmr_exptl_sample_conditions.ionic_strength_units";
        Label: "pdbx_nmr_exptl_sample_conditions.label";
        PH: "pdbx_nmr_exptl_sample_conditions.pH";
        PHErr: "pdbx_nmr_exptl_sample_conditions.pH_err";
        PHUnits: "pdbx_nmr_exptl_sample_conditions.pH_units";
        Pressure: "pdbx_nmr_exptl_sample_conditions.pressure";
        PressureErr: "pdbx_nmr_exptl_sample_conditions.pressure_err";
        PressureUnits: "pdbx_nmr_exptl_sample_conditions.pressure_units";
        Temperature: "pdbx_nmr_exptl_sample_conditions.temperature";
        TemperatureErr: "pdbx_nmr_exptl_sample_conditions.temperature_err";
        TemperatureUnits: "pdbx_nmr_exptl_sample_conditions.temperature_units";
    };
    static readonly PdbxNmrRefine: {
        Details: "pdbx_nmr_refine.details";
        Method: "pdbx_nmr_refine.method";
        SoftwareOrdinal: "pdbx_nmr_refine.software_ordinal";
    };
    static readonly PdbxNmrRepresentative: {
        ConformerId: "pdbx_nmr_representative.conformer_id";
        SelectionCriteria: "pdbx_nmr_representative.selection_criteria";
    };
    static readonly PdbxNmrSampleDetails: {
        Contents: "pdbx_nmr_sample_details.contents";
        Details: "pdbx_nmr_sample_details.details";
        Label: "pdbx_nmr_sample_details.label";
        SolutionId: "pdbx_nmr_sample_details.solution_id";
        SolventSystem: "pdbx_nmr_sample_details.solvent_system";
        Type: "pdbx_nmr_sample_details.type";
    };
    static readonly PdbxNmrSoftware: {
        Authors: "pdbx_nmr_software.authors";
        Classification: "pdbx_nmr_software.classification";
        Name: "pdbx_nmr_software.name";
        Ordinal: "pdbx_nmr_software.ordinal";
        Version: "pdbx_nmr_software.version";
    };
    static readonly PdbxNmrSpectrometer: {
        Details: "pdbx_nmr_spectrometer.details";
        FieldStrength: "pdbx_nmr_spectrometer.field_strength";
        Manufacturer: "pdbx_nmr_spectrometer.manufacturer";
        Model: "pdbx_nmr_spectrometer.model";
        SpectrometerId: "pdbx_nmr_spectrometer.spectrometer_id";
        Type: "pdbx_nmr_spectrometer.type";
    };
    static readonly PdbxReflnsTwin: {
        CrystalId: "pdbx_reflns_twin.crystal_id";
        DiffrnId: "pdbx_reflns_twin.diffrn_id";
        DomainId: "pdbx_reflns_twin.domain_id";
        Fraction: "pdbx_reflns_twin.fraction";
        Operator: "pdbx_reflns_twin.operator";
        Type: "pdbx_reflns_twin.type";
    };
    static readonly PdbxRelatedExpDataSet: {
        DataReference: "pdbx_related_exp_data_set.data_reference";
        DataSetType: "pdbx_related_exp_data_set.data_set_type";
        Details: "pdbx_related_exp_data_set.details";
        MetadataReference: "pdbx_related_exp_data_set.metadata_reference";
    };
    static readonly PdbxSerialCrystallographyDataReduction: {
        CrystalHits: "pdbx_serial_crystallography_data_reduction.crystal_hits";
        DiffrnId: "pdbx_serial_crystallography_data_reduction.diffrn_id";
        DropletHits: "pdbx_serial_crystallography_data_reduction.droplet_hits";
        FrameHits: "pdbx_serial_crystallography_data_reduction.frame_hits";
        FramesFailedIndex: "pdbx_serial_crystallography_data_reduction.frames_failed_index";
        FramesIndexed: "pdbx_serial_crystallography_data_reduction.frames_indexed";
        FramesTotal: "pdbx_serial_crystallography_data_reduction.frames_total";
        LatticesIndexed: "pdbx_serial_crystallography_data_reduction.lattices_indexed";
        LatticesMerged: "pdbx_serial_crystallography_data_reduction.lattices_merged";
        XfelPulseEvents: "pdbx_serial_crystallography_data_reduction.xfel_pulse_events";
        XfelRunNumbers: "pdbx_serial_crystallography_data_reduction.xfel_run_numbers";
    };
    static readonly PdbxSerialCrystallographyMeasurement: {
        CollectionTimeTotal: "pdbx_serial_crystallography_measurement.collection_time_total";
        Collimation: "pdbx_serial_crystallography_measurement.collimation";
        DiffrnId: "pdbx_serial_crystallography_measurement.diffrn_id";
        FocalSpotSize: "pdbx_serial_crystallography_measurement.focal_spot_size";
        PhotonsPerPulse: "pdbx_serial_crystallography_measurement.photons_per_pulse";
        PulseDuration: "pdbx_serial_crystallography_measurement.pulse_duration";
        PulseEnergy: "pdbx_serial_crystallography_measurement.pulse_energy";
        PulsePhotonEnergy: "pdbx_serial_crystallography_measurement.pulse_photon_energy";
        SourceDistance: "pdbx_serial_crystallography_measurement.source_distance";
        SourceSize: "pdbx_serial_crystallography_measurement.source_size";
        XfelPulseRepetitionRate: "pdbx_serial_crystallography_measurement.xfel_pulse_repetition_rate";
    };
    static readonly PdbxSerialCrystallographySampleDelivery: {
        Description: "pdbx_serial_crystallography_sample_delivery.description";
        DiffrnId: "pdbx_serial_crystallography_sample_delivery.diffrn_id";
        Method: "pdbx_serial_crystallography_sample_delivery.method";
    };
    static readonly PdbxSerialCrystallographySampleDeliveryFixedTarget: {
        CrystalsPerUnit: "pdbx_serial_crystallography_sample_delivery_fixed_target.crystals_per_unit";
        Description: "pdbx_serial_crystallography_sample_delivery_fixed_target.description";
        Details: "pdbx_serial_crystallography_sample_delivery_fixed_target.details";
        DiffrnId: "pdbx_serial_crystallography_sample_delivery_fixed_target.diffrn_id";
        MotionControl: "pdbx_serial_crystallography_sample_delivery_fixed_target.motion_control";
        SampleDehydrationPrevention: "pdbx_serial_crystallography_sample_delivery_fixed_target.sample_dehydration_prevention";
        SampleHolding: "pdbx_serial_crystallography_sample_delivery_fixed_target.sample_holding";
        SampleSolvent: "pdbx_serial_crystallography_sample_delivery_fixed_target.sample_solvent";
        SampleUnitSize: "pdbx_serial_crystallography_sample_delivery_fixed_target.sample_unit_size";
        SupportBase: "pdbx_serial_crystallography_sample_delivery_fixed_target.support_base";
        VelocityHorizontal: "pdbx_serial_crystallography_sample_delivery_fixed_target.velocity_horizontal";
        VelocityVertical: "pdbx_serial_crystallography_sample_delivery_fixed_target.velocity_vertical";
    };
    static readonly PdbxSerialCrystallographySampleDeliveryInjection: {
        CarrierSolvent: "pdbx_serial_crystallography_sample_delivery_injection.carrier_solvent";
        CrystalConcentration: "pdbx_serial_crystallography_sample_delivery_injection.crystal_concentration";
        Description: "pdbx_serial_crystallography_sample_delivery_injection.description";
        DiffrnId: "pdbx_serial_crystallography_sample_delivery_injection.diffrn_id";
        FilterSize: "pdbx_serial_crystallography_sample_delivery_injection.filter_size";
        FlowRate: "pdbx_serial_crystallography_sample_delivery_injection.flow_rate";
        InjectorDiameter: "pdbx_serial_crystallography_sample_delivery_injection.injector_diameter";
        InjectorNozzle: "pdbx_serial_crystallography_sample_delivery_injection.injector_nozzle";
        InjectorPressure: "pdbx_serial_crystallography_sample_delivery_injection.injector_pressure";
        InjectorTemperature: "pdbx_serial_crystallography_sample_delivery_injection.injector_temperature";
        JetDiameter: "pdbx_serial_crystallography_sample_delivery_injection.jet_diameter";
        PowerBy: "pdbx_serial_crystallography_sample_delivery_injection.power_by";
        Preparation: "pdbx_serial_crystallography_sample_delivery_injection.preparation";
    };
    static readonly PdbxSolnScatter: {
        BufferName: "pdbx_soln_scatter.buffer_name";
        ConcentrationRange: "pdbx_soln_scatter.concentration_range";
        DataAnalysisSoftwareList: "pdbx_soln_scatter.data_analysis_software_list";
        DataReductionSoftwareList: "pdbx_soln_scatter.data_reduction_software_list";
        DetectorSpecific: "pdbx_soln_scatter.detector_specific";
        DetectorType: "pdbx_soln_scatter.detector_type";
        Id: "pdbx_soln_scatter.id";
        MaxMeanCrossSectionalRadiiGyration: "pdbx_soln_scatter.max_mean_cross_sectional_radii_gyration";
        MaxMeanCrossSectionalRadiiGyrationEsd: "pdbx_soln_scatter.max_mean_cross_sectional_radii_gyration_esd";
        MeanGuinerRadius: "pdbx_soln_scatter.mean_guiner_radius";
        MeanGuinerRadiusEsd: "pdbx_soln_scatter.mean_guiner_radius_esd";
        MinMeanCrossSectionalRadiiGyration: "pdbx_soln_scatter.min_mean_cross_sectional_radii_gyration";
        MinMeanCrossSectionalRadiiGyrationEsd: "pdbx_soln_scatter.min_mean_cross_sectional_radii_gyration_esd";
        NumTimeFrames: "pdbx_soln_scatter.num_time_frames";
        ProteinLength: "pdbx_soln_scatter.protein_length";
        SamplePH: "pdbx_soln_scatter.sample_pH";
        SourceBeamline: "pdbx_soln_scatter.source_beamline";
        SourceBeamlineInstrument: "pdbx_soln_scatter.source_beamline_instrument";
        SourceClass: "pdbx_soln_scatter.source_class";
        SourceType: "pdbx_soln_scatter.source_type";
        Temperature: "pdbx_soln_scatter.temperature";
        Type: "pdbx_soln_scatter.type";
    };
    static readonly PdbxSolnScatterModel: {
        ConformerSelectionCriteria: "pdbx_soln_scatter_model.conformer_selection_criteria";
        Details: "pdbx_soln_scatter_model.details";
        EntryFittingList: "pdbx_soln_scatter_model.entry_fitting_list";
        Id: "pdbx_soln_scatter_model.id";
        Method: "pdbx_soln_scatter_model.method";
        NumConformersCalculated: "pdbx_soln_scatter_model.num_conformers_calculated";
        NumConformersSubmitted: "pdbx_soln_scatter_model.num_conformers_submitted";
        RepresentativeConformer: "pdbx_soln_scatter_model.representative_conformer";
        ScatterId: "pdbx_soln_scatter_model.scatter_id";
        SoftwareAuthorList: "pdbx_soln_scatter_model.software_author_list";
        SoftwareList: "pdbx_soln_scatter_model.software_list";
    };
    static readonly PdbxVrptSummary: {
        RnaSuiteness: "pdbx_vrpt_summary.RNA_suiteness";
        AttemptedValidationSteps: "pdbx_vrpt_summary.attempted_validation_steps";
        LigandsForBusterReport: "pdbx_vrpt_summary.ligands_for_buster_report";
        ReportCreationDate: "pdbx_vrpt_summary.report_creation_date";
        RestypesNotcheckedForBondAngleGeometry: "pdbx_vrpt_summary.restypes_notchecked_for_bond_angle_geometry";
    };
    static readonly PdbxVrptSummaryDiffraction: {
        BFactorType: "pdbx_vrpt_summary_diffraction.B_factor_type";
        BabinetB: "pdbx_vrpt_summary_diffraction.Babinet_b";
        BabinetK: "pdbx_vrpt_summary_diffraction.Babinet_k";
        Ccp4Version: "pdbx_vrpt_summary_diffraction.CCP4_version";
        DccR: "pdbx_vrpt_summary_diffraction.DCC_R";
        DccRfree: "pdbx_vrpt_summary_diffraction.DCC_Rfree";
        EdsR: "pdbx_vrpt_summary_diffraction.EDS_R";
        EdsRWarning: "pdbx_vrpt_summary_diffraction.EDS_R_warning";
        EdsResHigh: "pdbx_vrpt_summary_diffraction.EDS_res_high";
        EdsResLow: "pdbx_vrpt_summary_diffraction.EDS_res_low";
        FoFcCorrelation: "pdbx_vrpt_summary_diffraction.Fo_Fc_correlation";
        IOverSigma: "pdbx_vrpt_summary_diffraction.I_over_sigma";
        PadillaYeatesL2Mean: "pdbx_vrpt_summary_diffraction.Padilla_Yeates_L2_mean";
        PadillaYeatesLMean: "pdbx_vrpt_summary_diffraction.Padilla_Yeates_L_mean";
        QScore: "pdbx_vrpt_summary_diffraction.Q_score";
        WilsonBAniso: "pdbx_vrpt_summary_diffraction.Wilson_B_aniso";
        WilsonBEstimate: "pdbx_vrpt_summary_diffraction.Wilson_B_estimate";
        AcentricOutliers: "pdbx_vrpt_summary_diffraction.acentric_outliers";
        BulkSolventB: "pdbx_vrpt_summary_diffraction.bulk_solvent_b";
        BulkSolventK: "pdbx_vrpt_summary_diffraction.bulk_solvent_k";
        CentricOutliers: "pdbx_vrpt_summary_diffraction.centric_outliers";
        DataAnisotropy: "pdbx_vrpt_summary_diffraction.data_anisotropy";
        DataCompleteness: "pdbx_vrpt_summary_diffraction.data_completeness";
        DensityFitnessVersion: "pdbx_vrpt_summary_diffraction.density_fitness_version";
        ExpMethod: "pdbx_vrpt_summary_diffraction.exp_method";
        NumMillerIndices: "pdbx_vrpt_summary_diffraction.num_miller_indices";
        NumberReflnsRFree: "pdbx_vrpt_summary_diffraction.number_reflns_R_free";
        PercentRsrzOutliers: "pdbx_vrpt_summary_diffraction.percent_RSRZ_outliers";
        PercentFreeReflections: "pdbx_vrpt_summary_diffraction.percent_free_reflections";
        ServalcatVersion: "pdbx_vrpt_summary_diffraction.servalcat_version";
        TransNcsDetails: "pdbx_vrpt_summary_diffraction.trans_NCS_details";
        TwinFraction: "pdbx_vrpt_summary_diffraction.twin_fraction";
    };
    static readonly PdbxVrptSummaryEm: {
        QScore: "pdbx_vrpt_summary_em.Q_score";
        AtomInclusionAllAtoms: "pdbx_vrpt_summary_em.atom_inclusion_all_atoms";
        AtomInclusionBackbone: "pdbx_vrpt_summary_em.atom_inclusion_backbone";
        AuthorProvidedFscResolutionByCutoffHalfbit: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_halfbit";
        AuthorProvidedFscResolutionByCutoffOnebit: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_onebit";
        AuthorProvidedFscResolutionByCutoffPt5: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_pt_5";
        AuthorProvidedFscResolutionByCutoffPt143: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_pt_143";
        AuthorProvidedFscResolutionByCutoffPt333: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_pt_333";
        AuthorProvidedFscResolutionByCutoffThreesigma: "pdbx_vrpt_summary_em.author_provided_fsc_resolution_by_cutoff_threesigma";
        CalculatedFscResolutionByCutoffHalfbit: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_halfbit";
        CalculatedFscResolutionByCutoffOnebit: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_onebit";
        CalculatedFscResolutionByCutoffPt5: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_pt_5";
        CalculatedFscResolutionByCutoffPt143: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_pt_143";
        CalculatedFscResolutionByCutoffPt333: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_pt_333";
        CalculatedFscResolutionByCutoffThreesigma: "pdbx_vrpt_summary_em.calculated_fsc_resolution_by_cutoff_threesigma";
        ContourLevelPrimaryMap: "pdbx_vrpt_summary_em.contour_level_primary_map";
        ExpMethod: "pdbx_vrpt_summary_em.exp_method";
    };
    static readonly PdbxVrptSummaryGeometry: {
        AnglesRmsz: "pdbx_vrpt_summary_geometry.angles_RMSZ";
        BondsRmsz: "pdbx_vrpt_summary_geometry.bonds_RMSZ";
        Clashscore: "pdbx_vrpt_summary_geometry.clashscore";
        ClashscoreFullLength: "pdbx_vrpt_summary_geometry.clashscore_full_length";
        NumHReduce: "pdbx_vrpt_summary_geometry.num_H_reduce";
        NumAnglesRmsz: "pdbx_vrpt_summary_geometry.num_angles_RMSZ";
        NumBondsRmsz: "pdbx_vrpt_summary_geometry.num_bonds_RMSZ";
        PercentRamachandranOutliers: "pdbx_vrpt_summary_geometry.percent_ramachandran_outliers";
        PercentRamachandranOutliersFullLength: "pdbx_vrpt_summary_geometry.percent_ramachandran_outliers_full_length";
        PercentRotamerOutliers: "pdbx_vrpt_summary_geometry.percent_rotamer_outliers";
        PercentRotamerOutliersFullLength: "pdbx_vrpt_summary_geometry.percent_rotamer_outliers_full_length";
    };
    static readonly PdbxVrptSummaryNmr: {
        ChemicalShiftCompleteness: "pdbx_vrpt_summary_nmr.chemical_shift_completeness";
        ChemicalShiftCompletenessFullLength: "pdbx_vrpt_summary_nmr.chemical_shift_completeness_full_length";
        CyrangeError: "pdbx_vrpt_summary_nmr.cyrange_error";
        CyrangeNumberOfDomains: "pdbx_vrpt_summary_nmr.cyrange_number_of_domains";
        ExpMethod: "pdbx_vrpt_summary_nmr.exp_method";
        MedoidModel: "pdbx_vrpt_summary_nmr.medoid_model";
        NmrModelsConsistencyFlag: "pdbx_vrpt_summary_nmr.nmr_models_consistency_flag";
        NmrclustError: "pdbx_vrpt_summary_nmr.nmrclust_error";
        NmrclustNumberOfClusters: "pdbx_vrpt_summary_nmr.nmrclust_number_of_clusters";
        NmrclustNumberOfModels: "pdbx_vrpt_summary_nmr.nmrclust_number_of_models";
        NmrclustNumberOfOutliers: "pdbx_vrpt_summary_nmr.nmrclust_number_of_outliers";
        NmrclustRepresentativeModel: "pdbx_vrpt_summary_nmr.nmrclust_representative_model";
    };
    static readonly RcsbAccessionInfo: {
        DepositDate: "rcsb_accession_info.deposit_date";
        HasReleasedExperimentalData: "rcsb_accession_info.has_released_experimental_data";
        InitialReleaseDate: "rcsb_accession_info.initial_release_date";
        MajorRevision: "rcsb_accession_info.major_revision";
        MinorRevision: "rcsb_accession_info.minor_revision";
        RevisionDate: "rcsb_accession_info.revision_date";
        StatusCode: "rcsb_accession_info.status_code";
    };
    static readonly RcsbAssociatedHoldings: {
        RcsbId: "rcsb_associated_holdings.rcsb_id";
        RcsbRepositoryHoldingsCurrent: {
            RepositoryContentTypes: "rcsb_associated_holdings.rcsb_repository_holdings_current.repository_content_types";
        };
        RcsbRepositoryHoldingsCurrentEntryContainerIdentifiers: {
            AssemblyIds: "rcsb_associated_holdings.rcsb_repository_holdings_current_entry_container_identifiers.assembly_ids";
            EntryId: "rcsb_associated_holdings.rcsb_repository_holdings_current_entry_container_identifiers.entry_id";
            RcsbId: "rcsb_associated_holdings.rcsb_repository_holdings_current_entry_container_identifiers.rcsb_id";
            UpdateId: "rcsb_associated_holdings.rcsb_repository_holdings_current_entry_container_identifiers.update_id";
        };
    };
    static readonly RcsbBindingAffinity: {
        CompId: "rcsb_binding_affinity.comp_id";
        Link: "rcsb_binding_affinity.link";
        ProvenanceCode: "rcsb_binding_affinity.provenance_code";
        ReferenceSequenceIdentity: "rcsb_binding_affinity.reference_sequence_identity";
        Symbol: "rcsb_binding_affinity.symbol";
        Type: "rcsb_binding_affinity.type";
        Unit: "rcsb_binding_affinity.unit";
        Value: "rcsb_binding_affinity.value";
    };
    static readonly RcsbCompModelProvenance: {
        EntryId: "rcsb_comp_model_provenance.entry_id";
        SourceDb: "rcsb_comp_model_provenance.source_db";
        SourceFilename: "rcsb_comp_model_provenance.source_filename";
        SourcePaeUrl: "rcsb_comp_model_provenance.source_pae_url";
        SourceUrl: "rcsb_comp_model_provenance.source_url";
    };
    static readonly RcsbEntryContainerIdentifiers: {
        AssemblyIds: "rcsb_entry_container_identifiers.assembly_ids";
        BranchedEntityIds: "rcsb_entry_container_identifiers.branched_entity_ids";
        EmdbIds: "rcsb_entry_container_identifiers.emdb_ids";
        EntityIds: "rcsb_entry_container_identifiers.entity_ids";
        EntryId: "rcsb_entry_container_identifiers.entry_id";
        ModelIds: "rcsb_entry_container_identifiers.model_ids";
        NonPolymerEntityIds: "rcsb_entry_container_identifiers.non_polymer_entity_ids";
        PolymerEntityIds: "rcsb_entry_container_identifiers.polymer_entity_ids";
        PubmedId: "rcsb_entry_container_identifiers.pubmed_id";
        RcsbId: "rcsb_entry_container_identifiers.rcsb_id";
        RelatedEmdbIds: "rcsb_entry_container_identifiers.related_emdb_ids";
        WaterEntityIds: "rcsb_entry_container_identifiers.water_entity_ids";
    };
    static readonly RcsbEntryGroupMembership: {
        AggregationMethod: "rcsb_entry_group_membership.aggregation_method";
        GroupId: "rcsb_entry_group_membership.group_id";
    };
    static readonly RcsbEntryInfo: {
        AssemblyCount: "rcsb_entry_info.assembly_count";
        BranchedEntityCount: "rcsb_entry_info.branched_entity_count";
        BranchedMolecularWeightMaximum: "rcsb_entry_info.branched_molecular_weight_maximum";
        BranchedMolecularWeightMinimum: "rcsb_entry_info.branched_molecular_weight_minimum";
        CisPeptideCount: "rcsb_entry_info.cis_peptide_count";
        DepositedAtomCount: "rcsb_entry_info.deposited_atom_count";
        DepositedDeuteratedWaterCount: "rcsb_entry_info.deposited_deuterated_water_count";
        DepositedHydrogenAtomCount: "rcsb_entry_info.deposited_hydrogen_atom_count";
        DepositedModelCount: "rcsb_entry_info.deposited_model_count";
        DepositedModeledPolymerMonomerCount: "rcsb_entry_info.deposited_modeled_polymer_monomer_count";
        DepositedNonpolymerEntityInstanceCount: "rcsb_entry_info.deposited_nonpolymer_entity_instance_count";
        DepositedPolymerEntityInstanceCount: "rcsb_entry_info.deposited_polymer_entity_instance_count";
        DepositedPolymerMonomerCount: "rcsb_entry_info.deposited_polymer_monomer_count";
        DepositedSolventAtomCount: "rcsb_entry_info.deposited_solvent_atom_count";
        DepositedUnmodeledPolymerMonomerCount: "rcsb_entry_info.deposited_unmodeled_polymer_monomer_count";
        DiffrnRadiationWavelengthMaximum: "rcsb_entry_info.diffrn_radiation_wavelength_maximum";
        DiffrnRadiationWavelengthMinimum: "rcsb_entry_info.diffrn_radiation_wavelength_minimum";
        DiffrnResolutionHigh: {
            ProvenanceSource: "rcsb_entry_info.diffrn_resolution_high.provenance_source";
            Value: "rcsb_entry_info.diffrn_resolution_high.value";
        };
        DisulfideBondCount: "rcsb_entry_info.disulfide_bond_count";
        EntityCount: "rcsb_entry_info.entity_count";
        ExperimentalMethod: "rcsb_entry_info.experimental_method";
        ExperimentalMethodCount: "rcsb_entry_info.experimental_method_count";
        InterMolCovalentBondCount: "rcsb_entry_info.inter_mol_covalent_bond_count";
        InterMolMetalicBondCount: "rcsb_entry_info.inter_mol_metalic_bond_count";
        MolecularWeight: "rcsb_entry_info.molecular_weight";
        NaPolymerEntityTypes: "rcsb_entry_info.na_polymer_entity_types";
        NdbStructConfNaFeatureCombined: "rcsb_entry_info.ndb_struct_conf_na_feature_combined";
        NonpolymerBoundComponents: "rcsb_entry_info.nonpolymer_bound_components";
        NonpolymerEntityCount: "rcsb_entry_info.nonpolymer_entity_count";
        NonpolymerMolecularWeightMaximum: "rcsb_entry_info.nonpolymer_molecular_weight_maximum";
        NonpolymerMolecularWeightMinimum: "rcsb_entry_info.nonpolymer_molecular_weight_minimum";
        PolymerComposition: "rcsb_entry_info.polymer_composition";
        PolymerEntityCount: "rcsb_entry_info.polymer_entity_count";
        PolymerEntityCountDna: "rcsb_entry_info.polymer_entity_count_DNA";
        PolymerEntityCountRna: "rcsb_entry_info.polymer_entity_count_RNA";
        PolymerEntityCountNucleicAcid: "rcsb_entry_info.polymer_entity_count_nucleic_acid";
        PolymerEntityCountNucleicAcidHybrid: "rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid";
        PolymerEntityCountProtein: "rcsb_entry_info.polymer_entity_count_protein";
        PolymerEntityTaxonomyCount: "rcsb_entry_info.polymer_entity_taxonomy_count";
        PolymerMolecularWeightMaximum: "rcsb_entry_info.polymer_molecular_weight_maximum";
        PolymerMolecularWeightMinimum: "rcsb_entry_info.polymer_molecular_weight_minimum";
        PolymerMonomerCountMaximum: "rcsb_entry_info.polymer_monomer_count_maximum";
        PolymerMonomerCountMinimum: "rcsb_entry_info.polymer_monomer_count_minimum";
        ResolutionCombined: "rcsb_entry_info.resolution_combined";
        SelectedPolymerEntityTypes: "rcsb_entry_info.selected_polymer_entity_types";
        SoftwareProgramsCombined: "rcsb_entry_info.software_programs_combined";
        SolventEntityCount: "rcsb_entry_info.solvent_entity_count";
        StructureDeterminationMethodology: "rcsb_entry_info.structure_determination_methodology";
        StructureDeterminationMethodologyPriority: "rcsb_entry_info.structure_determination_methodology_priority";
    };
    static readonly RcsbExternalReferences: {
        Id: "rcsb_external_references.id";
        Link: "rcsb_external_references.link";
        Type: "rcsb_external_references.type";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbMaQaMetricGlobal: {
        MaQaMetricGlobal: {
            Description: "rcsb_ma_qa_metric_global.ma_qa_metric_global.description";
            Name: "rcsb_ma_qa_metric_global.ma_qa_metric_global.name";
            Type: "rcsb_ma_qa_metric_global.ma_qa_metric_global.type";
            TypeOtherDetails: "rcsb_ma_qa_metric_global.ma_qa_metric_global.type_other_details";
            Value: "rcsb_ma_qa_metric_global.ma_qa_metric_global.value";
        };
        ModelId: "rcsb_ma_qa_metric_global.model_id";
    };
    static readonly RcsbPrimaryCitation: {
        BookIdIsbn: "rcsb_primary_citation.book_id_ISBN";
        BookPublisher: "rcsb_primary_citation.book_publisher";
        BookPublisherCity: "rcsb_primary_citation.book_publisher_city";
        BookTitle: "rcsb_primary_citation.book_title";
        CoordinateLinkage: "rcsb_primary_citation.coordinate_linkage";
        Country: "rcsb_primary_citation.country";
        Id: "rcsb_primary_citation.id";
        JournalAbbrev: "rcsb_primary_citation.journal_abbrev";
        JournalIdAstm: "rcsb_primary_citation.journal_id_ASTM";
        JournalIdCsd: "rcsb_primary_citation.journal_id_CSD";
        JournalIdIssn: "rcsb_primary_citation.journal_id_ISSN";
        JournalIssue: "rcsb_primary_citation.journal_issue";
        JournalVolume: "rcsb_primary_citation.journal_volume";
        Language: "rcsb_primary_citation.language";
        PageFirst: "rcsb_primary_citation.page_first";
        PageLast: "rcsb_primary_citation.page_last";
        PdbxDatabaseIdDoi: "rcsb_primary_citation.pdbx_database_id_DOI";
        PdbxDatabaseIdPubMed: "rcsb_primary_citation.pdbx_database_id_PubMed";
        RcsbOrcidIdentifiers: "rcsb_primary_citation.rcsb_ORCID_identifiers";
        RcsbAuthors: "rcsb_primary_citation.rcsb_authors";
        RcsbJournalAbbrev: "rcsb_primary_citation.rcsb_journal_abbrev";
        Title: "rcsb_primary_citation.title";
        Year: "rcsb_primary_citation.year";
    };
    static readonly Refine: {
        BIsoMax: "refine.B_iso_max";
        BIsoMean: "refine.B_iso_mean";
        BIsoMin: "refine.B_iso_min";
        AnisoB11: "refine.aniso_B_1_1";
        AnisoB12: "refine.aniso_B_1_2";
        AnisoB13: "refine.aniso_B_1_3";
        AnisoB22: "refine.aniso_B_2_2";
        AnisoB23: "refine.aniso_B_2_3";
        AnisoB33: "refine.aniso_B_3_3";
        CorrelationCoeffFoToFc: "refine.correlation_coeff_Fo_to_Fc";
        CorrelationCoeffFoToFcFree: "refine.correlation_coeff_Fo_to_Fc_free";
        Details: "refine.details";
        LsRFactorRFree: "refine.ls_R_factor_R_free";
        LsRFactorRFreeError: "refine.ls_R_factor_R_free_error";
        LsRFactorRFreeErrorDetails: "refine.ls_R_factor_R_free_error_details";
        LsRFactorRWork: "refine.ls_R_factor_R_work";
        LsRFactorAll: "refine.ls_R_factor_all";
        LsRFactorObs: "refine.ls_R_factor_obs";
        LsDResHigh: "refine.ls_d_res_high";
        LsDResLow: "refine.ls_d_res_low";
        LsMatrixType: "refine.ls_matrix_type";
        LsNumberParameters: "refine.ls_number_parameters";
        LsNumberReflnsRFree: "refine.ls_number_reflns_R_free";
        LsNumberReflnsRWork: "refine.ls_number_reflns_R_work";
        LsNumberReflnsAll: "refine.ls_number_reflns_all";
        LsNumberReflnsObs: "refine.ls_number_reflns_obs";
        LsNumberRestraints: "refine.ls_number_restraints";
        LsPercentReflnsRFree: "refine.ls_percent_reflns_R_free";
        LsPercentReflnsObs: "refine.ls_percent_reflns_obs";
        LsRedundancyReflnsAll: "refine.ls_redundancy_reflns_all";
        LsRedundancyReflnsObs: "refine.ls_redundancy_reflns_obs";
        LsWRFactorRFree: "refine.ls_wR_factor_R_free";
        LsWRFactorRWork: "refine.ls_wR_factor_R_work";
        OccupancyMax: "refine.occupancy_max";
        OccupancyMin: "refine.occupancy_min";
        OverallFomFreeRSet: "refine.overall_FOM_free_R_set";
        OverallFomWorkRSet: "refine.overall_FOM_work_R_set";
        OverallSuB: "refine.overall_SU_B";
        OverallSuMl: "refine.overall_SU_ML";
        OverallSuRCruickshankDpi: "refine.overall_SU_R_Cruickshank_DPI";
        OverallSuRFree: "refine.overall_SU_R_free";
        PdbxRFreeSelectionDetails: "refine.pdbx_R_Free_selection_details";
        PdbxTlsResidualAdpFlag: "refine.pdbx_TLS_residual_ADP_flag";
        PdbxAverageFscFree: "refine.pdbx_average_fsc_free";
        PdbxAverageFscOverall: "refine.pdbx_average_fsc_overall";
        PdbxAverageFscWork: "refine.pdbx_average_fsc_work";
        PdbxDataCutoffHighAbsF: "refine.pdbx_data_cutoff_high_absF";
        PdbxDataCutoffHighRmsAbsF: "refine.pdbx_data_cutoff_high_rms_absF";
        PdbxDataCutoffLowAbsF: "refine.pdbx_data_cutoff_low_absF";
        PdbxDiffrnId: "refine.pdbx_diffrn_id";
        PdbxIsotropicThermalModel: "refine.pdbx_isotropic_thermal_model";
        PdbxLsCrossValidMethod: "refine.pdbx_ls_cross_valid_method";
        PdbxLsSigmaF: "refine.pdbx_ls_sigma_F";
        PdbxLsSigmaFsqd: "refine.pdbx_ls_sigma_Fsqd";
        PdbxLsSigmaI: "refine.pdbx_ls_sigma_I";
        PdbxMethodToDetermineStruct: "refine.pdbx_method_to_determine_struct";
        PdbxOverallEsuR: "refine.pdbx_overall_ESU_R";
        PdbxOverallEsuRFree: "refine.pdbx_overall_ESU_R_Free";
        PdbxOverallSuRBlowDpi: "refine.pdbx_overall_SU_R_Blow_DPI";
        PdbxOverallSuRFreeBlowDpi: "refine.pdbx_overall_SU_R_free_Blow_DPI";
        PdbxOverallSuRFreeCruickshankDpi: "refine.pdbx_overall_SU_R_free_Cruickshank_DPI";
        PdbxOverallPhaseError: "refine.pdbx_overall_phase_error";
        PdbxRefineId: "refine.pdbx_refine_id";
        PdbxSolventIonProbeRadii: "refine.pdbx_solvent_ion_probe_radii";
        PdbxSolventShrinkageRadii: "refine.pdbx_solvent_shrinkage_radii";
        PdbxSolventVdwProbeRadii: "refine.pdbx_solvent_vdw_probe_radii";
        PdbxStartingModel: "refine.pdbx_starting_model";
        PdbxStereochemTargetValSpecCase: "refine.pdbx_stereochem_target_val_spec_case";
        PdbxStereochemistryTargetValues: "refine.pdbx_stereochemistry_target_values";
        SolventModelDetails: "refine.solvent_model_details";
        SolventModelParamBsol: "refine.solvent_model_param_bsol";
        SolventModelParamKsol: "refine.solvent_model_param_ksol";
    };
    static readonly RefineAnalyze: {
        LuzzatiCoordinateErrorFree: "refine_analyze.Luzzati_coordinate_error_free";
        LuzzatiCoordinateErrorObs: "refine_analyze.Luzzati_coordinate_error_obs";
        LuzzatiDResLowFree: "refine_analyze.Luzzati_d_res_low_free";
        LuzzatiDResLowObs: "refine_analyze.Luzzati_d_res_low_obs";
        LuzzatiSigmaAFree: "refine_analyze.Luzzati_sigma_a_free";
        LuzzatiSigmaAObs: "refine_analyze.Luzzati_sigma_a_obs";
        NumberDisorderedResidues: "refine_analyze.number_disordered_residues";
        OccupancySumHydrogen: "refine_analyze.occupancy_sum_hydrogen";
        OccupancySumNonHydrogen: "refine_analyze.occupancy_sum_non_hydrogen";
        PdbxLuzzatiDResHighObs: "refine_analyze.pdbx_Luzzati_d_res_high_obs";
        PdbxRefineId: "refine_analyze.pdbx_refine_id";
    };
    static readonly RefineHist: {
        CycleId: "refine_hist.cycle_id";
        DResHigh: "refine_hist.d_res_high";
        DResLow: "refine_hist.d_res_low";
        NumberAtomsSolvent: "refine_hist.number_atoms_solvent";
        NumberAtomsTotal: "refine_hist.number_atoms_total";
        PdbxBIsoMeanLigand: "refine_hist.pdbx_B_iso_mean_ligand";
        PdbxBIsoMeanSolvent: "refine_hist.pdbx_B_iso_mean_solvent";
        PdbxNumberAtomsLigand: "refine_hist.pdbx_number_atoms_ligand";
        PdbxNumberAtomsNucleicAcid: "refine_hist.pdbx_number_atoms_nucleic_acid";
        PdbxNumberAtomsProtein: "refine_hist.pdbx_number_atoms_protein";
        PdbxNumberResiduesTotal: "refine_hist.pdbx_number_residues_total";
        PdbxRefineId: "refine_hist.pdbx_refine_id";
    };
    static readonly RefineLsRestr: {
        DevIdeal: "refine_ls_restr.dev_ideal";
        DevIdealTarget: "refine_ls_restr.dev_ideal_target";
        Number: "refine_ls_restr.number";
        PdbxRefineId: "refine_ls_restr.pdbx_refine_id";
        PdbxRestraintFunction: "refine_ls_restr.pdbx_restraint_function";
        Type: "refine_ls_restr.type";
        Weight: "refine_ls_restr.weight";
    };
    static readonly Reflns: {
        BIsoWilsonEstimate: "reflns.B_iso_Wilson_estimate";
        RFreeDetails: "reflns.R_free_details";
        RmergeFAll: "reflns.Rmerge_F_all";
        RmergeFObs: "reflns.Rmerge_F_obs";
        DResolutionHigh: "reflns.d_resolution_high";
        DResolutionLow: "reflns.d_resolution_low";
        DataReductionDetails: "reflns.data_reduction_details";
        DataReductionMethod: "reflns.data_reduction_method";
        Details: "reflns.details";
        LimitHMax: "reflns.limit_h_max";
        LimitHMin: "reflns.limit_h_min";
        LimitKMax: "reflns.limit_k_max";
        LimitKMin: "reflns.limit_k_min";
        LimitLMax: "reflns.limit_l_max";
        LimitLMin: "reflns.limit_l_min";
        NumberAll: "reflns.number_all";
        NumberObs: "reflns.number_obs";
        ObservedCriterion: "reflns.observed_criterion";
        ObservedCriterionFMax: "reflns.observed_criterion_F_max";
        ObservedCriterionFMin: "reflns.observed_criterion_F_min";
        ObservedCriterionIMax: "reflns.observed_criterion_I_max";
        ObservedCriterionIMin: "reflns.observed_criterion_I_min";
        ObservedCriterionSigmaF: "reflns.observed_criterion_sigma_F";
        ObservedCriterionSigmaI: "reflns.observed_criterion_sigma_I";
        PdbxCcHalf: "reflns.pdbx_CC_half";
        PdbxRSplit: "reflns.pdbx_R_split";
        PdbxRmergeIObs: "reflns.pdbx_Rmerge_I_obs";
        PdbxRpimIAll: "reflns.pdbx_Rpim_I_all";
        PdbxRrimIAll: "reflns.pdbx_Rrim_I_all";
        PdbxRsymValue: "reflns.pdbx_Rsym_value";
        PdbxChiSquared: "reflns.pdbx_chi_squared";
        PdbxDiffrnId: "reflns.pdbx_diffrn_id";
        PdbxNetIOverAvSigmaI: "reflns.pdbx_netI_over_av_sigmaI";
        PdbxNetIOverSigmaI: "reflns.pdbx_netI_over_sigmaI";
        PdbxNumberMeasuredAll: "reflns.pdbx_number_measured_all";
        PdbxOrdinal: "reflns.pdbx_ordinal";
        PdbxRedundancy: "reflns.pdbx_redundancy";
        PdbxScalingRejects: "reflns.pdbx_scaling_rejects";
        PercentPossibleObs: "reflns.percent_possible_obs";
        PhaseCalculationDetails: "reflns.phase_calculation_details";
    };
    static readonly ReflnsShell: {
        RmergeFAll: "reflns_shell.Rmerge_F_all";
        RmergeFObs: "reflns_shell.Rmerge_F_obs";
        RmergeIAll: "reflns_shell.Rmerge_I_all";
        RmergeIObs: "reflns_shell.Rmerge_I_obs";
        DResHigh: "reflns_shell.d_res_high";
        DResLow: "reflns_shell.d_res_low";
        MeanIOverSigIAll: "reflns_shell.meanI_over_sigI_all";
        MeanIOverSigIObs: "reflns_shell.meanI_over_sigI_obs";
        MeanIOverUIAll: "reflns_shell.meanI_over_uI_all";
        NumberMeasuredAll: "reflns_shell.number_measured_all";
        NumberMeasuredObs: "reflns_shell.number_measured_obs";
        NumberPossible: "reflns_shell.number_possible";
        NumberUniqueAll: "reflns_shell.number_unique_all";
        NumberUniqueObs: "reflns_shell.number_unique_obs";
        PdbxCcHalf: "reflns_shell.pdbx_CC_half";
        PdbxRSplit: "reflns_shell.pdbx_R_split";
        PdbxRpimIAll: "reflns_shell.pdbx_Rpim_I_all";
        PdbxRrimIAll: "reflns_shell.pdbx_Rrim_I_all";
        PdbxRsymValue: "reflns_shell.pdbx_Rsym_value";
        PdbxChiSquared: "reflns_shell.pdbx_chi_squared";
        PdbxDiffrnId: "reflns_shell.pdbx_diffrn_id";
        PdbxNetIOverSigmaIAll: "reflns_shell.pdbx_netI_over_sigmaI_all";
        PdbxNetIOverSigmaIObs: "reflns_shell.pdbx_netI_over_sigmaI_obs";
        PdbxOrdinal: "reflns_shell.pdbx_ordinal";
        PdbxRedundancy: "reflns_shell.pdbx_redundancy";
        PdbxRejects: "reflns_shell.pdbx_rejects";
        PercentPossibleAll: "reflns_shell.percent_possible_all";
        PercentPossibleObs: "reflns_shell.percent_possible_obs";
    };
    static readonly Software: {
        CitationId: "software.citation_id";
        Classification: "software.classification";
        ContactAuthor: "software.contact_author";
        ContactAuthorEmail: "software.contact_author_email";
        Date: "software.date";
        Description: "software.description";
        Language: "software.language";
        Location: "software.location";
        Name: "software.name";
        Os: "software.os";
        PdbxOrdinal: "software.pdbx_ordinal";
        Type: "software.type";
        Version: "software.version";
    };
    static readonly Struct: {
        PdbxCaspFlag: "struct.pdbx_CASP_flag";
        PdbxDescriptor: "struct.pdbx_descriptor";
        PdbxModelDetails: "struct.pdbx_model_details";
        PdbxModelTypeDetails: "struct.pdbx_model_type_details";
        Title: "struct.title";
    };
    static readonly StructKeywords: {
        PdbxKeywords: "struct_keywords.pdbx_keywords";
        Text: "struct_keywords.text";
    };
    static readonly Symmetry: {
        IntTablesNumber: "symmetry.Int_Tables_number";
        CellSetting: "symmetry.cell_setting";
        PdbxFullSpaceGroupNameHM: "symmetry.pdbx_full_space_group_name_H_M";
        SpaceGroupNameHM: "symmetry.space_group_name_H_M";
        SpaceGroupNameHall: "symmetry.space_group_name_Hall";
    };
}
export declare class GroupEntry {
    static readonly RcsbGroupAccessionInfo: {
        Version: "rcsb_group_accession_info.version";
    };
    static readonly RcsbGroupContainerIdentifiers: {
        GroupId: "rcsb_group_container_identifiers.group_id";
        GroupMemberIds: "rcsb_group_container_identifiers.group_member_ids";
        GroupProvenanceId: "rcsb_group_container_identifiers.group_provenance_id";
        ParentMemberIds: "rcsb_group_container_identifiers.parent_member_ids";
    };
    static readonly RcsbGroupInfo: {
        GroupDescription: "rcsb_group_info.group_description";
        GroupMembersCount: "rcsb_group_info.group_members_count";
        GroupMembersGranularity: "rcsb_group_info.group_members_granularity";
        GroupName: "rcsb_group_info.group_name";
    };
    static readonly RcsbGroupRelated: {
        ResourceAccessionCode: "rcsb_group_related.resource_accession_code";
        ResourceName: "rcsb_group_related.resource_name";
    };
    static readonly RcsbGroupStatistics: {
        SimilarityCutoff: "rcsb_group_statistics.similarity_cutoff";
        SimilarityScoreMax: "rcsb_group_statistics.similarity_score_max";
        SimilarityScoreMin: "rcsb_group_statistics.similarity_score_min";
    };
    static readonly RcsbId: "rcsb_id";
}
export declare class GroupProvenance {
    static readonly RcsbGroupAggregationMethod: {
        Method: {
            Details: {
                Description: "rcsb_group_aggregation_method.method.details.description";
                Name: "rcsb_group_aggregation_method.method.details.name";
                Type: "rcsb_group_aggregation_method.method.details.type";
                Value: "rcsb_group_aggregation_method.method.details.value";
            };
            Name: "rcsb_group_aggregation_method.method.name";
            Version: "rcsb_group_aggregation_method.method.version";
        };
        SimilarityCriteria: {
            SimilarityFunction: "rcsb_group_aggregation_method.similarity_criteria.similarity_function";
        };
        Type: "rcsb_group_aggregation_method.type";
    };
    static readonly RcsbGroupProvenanceContainerIdentifiers: {
        GroupProvenanceId: "rcsb_group_provenance_container_identifiers.group_provenance_id";
    };
    static readonly RcsbId: "rcsb_id";
}
export declare class CoreInterface {
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbInterfaceContainerIdentifiers: {
        AssemblyId: "rcsb_interface_container_identifiers.assembly_id";
        EntryId: "rcsb_interface_container_identifiers.entry_id";
        InterfaceEntityId: "rcsb_interface_container_identifiers.interface_entity_id";
        InterfaceId: "rcsb_interface_container_identifiers.interface_id";
        RcsbId: "rcsb_interface_container_identifiers.rcsb_id";
    };
    static readonly RcsbInterfaceInfo: {
        InterfaceArea: "rcsb_interface_info.interface_area";
        InterfaceCharacter: "rcsb_interface_info.interface_character";
        NumCoreInterfaceResidues: "rcsb_interface_info.num_core_interface_residues";
        NumInterfaceResidues: "rcsb_interface_info.num_interface_residues";
        PolymerComposition: "rcsb_interface_info.polymer_composition";
        SelfJaccardContactScore: "rcsb_interface_info.self_jaccard_contact_score";
    };
    static readonly RcsbInterfaceOperator: "rcsb_interface_operator";
    static readonly RcsbInterfacePartner: {
        InterfacePartnerFeature: {
            AdditionalProperties: {
                Name: "rcsb_interface_partner.interface_partner_feature.additional_properties.name";
                Values: "rcsb_interface_partner.interface_partner_feature.additional_properties.values";
            };
            AssignmentVersion: "rcsb_interface_partner.interface_partner_feature.assignment_version";
            Description: "rcsb_interface_partner.interface_partner_feature.description";
            FeatureId: "rcsb_interface_partner.interface_partner_feature.feature_id";
            FeaturePositions: {
                BegSeqId: "rcsb_interface_partner.interface_partner_feature.feature_positions.beg_seq_id";
                EndSeqId: "rcsb_interface_partner.interface_partner_feature.feature_positions.end_seq_id";
                Values: "rcsb_interface_partner.interface_partner_feature.feature_positions.values";
            };
            Name: "rcsb_interface_partner.interface_partner_feature.name";
            ProvenanceSource: "rcsb_interface_partner.interface_partner_feature.provenance_source";
            Type: "rcsb_interface_partner.interface_partner_feature.type";
        };
        InterfacePartnerIdentifier: {
            AsymId: "rcsb_interface_partner.interface_partner_identifier.asym_id";
            EntityId: "rcsb_interface_partner.interface_partner_identifier.entity_id";
        };
    };
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
}
export declare class CoreNonpolymerEntity {
    static readonly NonpolymerComp: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "nonpolymer_comp.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "nonpolymer_comp.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "nonpolymer_comp.drugbank.drugbank_info.atc_codes";
                BrandNames: "nonpolymer_comp.drugbank.drugbank_info.brand_names";
                CasNumber: "nonpolymer_comp.drugbank.drugbank_info.cas_number";
                Description: "nonpolymer_comp.drugbank.drugbank_info.description";
                DrugCategories: "nonpolymer_comp.drugbank.drugbank_info.drug_categories";
                DrugGroups: "nonpolymer_comp.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "nonpolymer_comp.drugbank.drugbank_info.drug_products.approved";
                    Country: "nonpolymer_comp.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "nonpolymer_comp.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "nonpolymer_comp.drugbank.drugbank_info.drug_products.name";
                    Source: "nonpolymer_comp.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "nonpolymer_comp.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "nonpolymer_comp.drugbank.drugbank_info.drugbank_id";
                Indication: "nonpolymer_comp.drugbank.drugbank_info.indication";
                MechanismOfAction: "nonpolymer_comp.drugbank.drugbank_info.mechanism_of_action";
                Name: "nonpolymer_comp.drugbank.drugbank_info.name";
                Pharmacology: "nonpolymer_comp.drugbank.drugbank_info.pharmacology";
                Synonyms: "nonpolymer_comp.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "nonpolymer_comp.drugbank.drugbank_target.interaction_type";
                Name: "nonpolymer_comp.drugbank.drugbank_target.name";
                Ordinal: "nonpolymer_comp.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "nonpolymer_comp.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "nonpolymer_comp.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "nonpolymer_comp.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "nonpolymer_comp.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "nonpolymer_comp.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "nonpolymer_comp.pdbx_chem_comp_audit.action_type";
            CompId: "nonpolymer_comp.pdbx_chem_comp_audit.comp_id";
            Date: "nonpolymer_comp.pdbx_chem_comp_audit.date";
            Details: "nonpolymer_comp.pdbx_chem_comp_audit.details";
            Ordinal: "nonpolymer_comp.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "nonpolymer_comp.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "nonpolymer_comp.pdbx_chem_comp_descriptor.descriptor";
            Program: "nonpolymer_comp.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "nonpolymer_comp.pdbx_chem_comp_descriptor.program_version";
            Type: "nonpolymer_comp.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "nonpolymer_comp.pdbx_chem_comp_feature.comp_id";
            Source: "nonpolymer_comp.pdbx_chem_comp_feature.source";
            Type: "nonpolymer_comp.pdbx_chem_comp_feature.type";
            Value: "nonpolymer_comp.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "nonpolymer_comp.pdbx_chem_comp_identifier.comp_id";
            Identifier: "nonpolymer_comp.pdbx_chem_comp_identifier.identifier";
            Program: "nonpolymer_comp.pdbx_chem_comp_identifier.program";
            ProgramVersion: "nonpolymer_comp.pdbx_chem_comp_identifier.program_version";
            Type: "nonpolymer_comp.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "nonpolymer_comp.pdbx_family_prd_audit.action_type";
            Annotator: "nonpolymer_comp.pdbx_family_prd_audit.annotator";
            Date: "nonpolymer_comp.pdbx_family_prd_audit.date";
            Details: "nonpolymer_comp.pdbx_family_prd_audit.details";
            FamilyPrdId: "nonpolymer_comp.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "nonpolymer_comp.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "nonpolymer_comp.pdbx_prd_audit.action_type";
            Annotator: "nonpolymer_comp.pdbx_prd_audit.annotator";
            Date: "nonpolymer_comp.pdbx_prd_audit.date";
            Details: "nonpolymer_comp.pdbx_prd_audit.details";
            PrdId: "nonpolymer_comp.pdbx_prd_audit.prd_id";
            ProcessingSite: "nonpolymer_comp.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "nonpolymer_comp.pdbx_reference_entity_list.component_id";
            Details: "nonpolymer_comp.pdbx_reference_entity_list.details";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_list.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_list.ref_entity_id";
            Type: "nonpolymer_comp.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "nonpolymer_comp.pdbx_reference_entity_poly.db_code";
            DbName: "nonpolymer_comp.pdbx_reference_entity_poly.db_name";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_poly.ref_entity_id";
            Type: "nonpolymer_comp.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "nonpolymer_comp.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "nonpolymer_comp.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "nonpolymer_comp.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "nonpolymer_comp.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "nonpolymer_comp.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "nonpolymer_comp.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "nonpolymer_comp.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "nonpolymer_comp.pdbx_reference_entity_poly_link.link_id";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "nonpolymer_comp.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "nonpolymer_comp.pdbx_reference_entity_poly_seq.hetero";
            MonId: "nonpolymer_comp.pdbx_reference_entity_poly_seq.mon_id";
            Num: "nonpolymer_comp.pdbx_reference_entity_poly_seq.num";
            Observed: "nonpolymer_comp.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "nonpolymer_comp.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "nonpolymer_comp.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "nonpolymer_comp.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "nonpolymer_comp.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "nonpolymer_comp.pdbx_reference_entity_src_nat.atcc";
            DbCode: "nonpolymer_comp.pdbx_reference_entity_src_nat.db_code";
            DbName: "nonpolymer_comp.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "nonpolymer_comp.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "nonpolymer_comp.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "nonpolymer_comp.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "nonpolymer_comp.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "nonpolymer_comp.pdbx_reference_entity_src_nat.source";
            SourceId: "nonpolymer_comp.pdbx_reference_entity_src_nat.source_id";
            Taxid: "nonpolymer_comp.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "nonpolymer_comp.pdbx_reference_molecule.chem_comp_id";
            Class: "nonpolymer_comp.pdbx_reference_molecule.class";
            ClassEvidenceCode: "nonpolymer_comp.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "nonpolymer_comp.pdbx_reference_molecule.compound_details";
            Description: "nonpolymer_comp.pdbx_reference_molecule.description";
            Formula: "nonpolymer_comp.pdbx_reference_molecule.formula";
            FormulaWeight: "nonpolymer_comp.pdbx_reference_molecule.formula_weight";
            Name: "nonpolymer_comp.pdbx_reference_molecule.name";
            PrdId: "nonpolymer_comp.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "nonpolymer_comp.pdbx_reference_molecule.release_status";
            ReplacedBy: "nonpolymer_comp.pdbx_reference_molecule.replaced_by";
            Replaces: "nonpolymer_comp.pdbx_reference_molecule.replaces";
            RepresentAs: "nonpolymer_comp.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "nonpolymer_comp.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "nonpolymer_comp.pdbx_reference_molecule.type";
            TypeEvidenceCode: "nonpolymer_comp.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "nonpolymer_comp.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "nonpolymer_comp.pdbx_reference_molecule_annotation.prd_id";
            Source: "nonpolymer_comp.pdbx_reference_molecule_annotation.source";
            Text: "nonpolymer_comp.pdbx_reference_molecule_annotation.text";
            Type: "nonpolymer_comp.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "nonpolymer_comp.pdbx_reference_molecule_details.ordinal";
            Source: "nonpolymer_comp.pdbx_reference_molecule_details.source";
            SourceId: "nonpolymer_comp.pdbx_reference_molecule_details.source_id";
            Text: "nonpolymer_comp.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_family.family_prd_id";
            Name: "nonpolymer_comp.pdbx_reference_molecule_family.name";
            ReleaseStatus: "nonpolymer_comp.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "nonpolymer_comp.pdbx_reference_molecule_family.replaced_by";
            Replaces: "nonpolymer_comp.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "nonpolymer_comp.pdbx_reference_molecule_features.ordinal";
            PrdId: "nonpolymer_comp.pdbx_reference_molecule_features.prd_id";
            Source: "nonpolymer_comp.pdbx_reference_molecule_features.source";
            SourceOrdinal: "nonpolymer_comp.pdbx_reference_molecule_features.source_ordinal";
            Type: "nonpolymer_comp.pdbx_reference_molecule_features.type";
            Value: "nonpolymer_comp.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "nonpolymer_comp.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "nonpolymer_comp.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "nonpolymer_comp.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "nonpolymer_comp.pdbx_reference_molecule_related_structures.db_code";
            DbName: "nonpolymer_comp.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "nonpolymer_comp.pdbx_reference_molecule_related_structures.formula";
            Name: "nonpolymer_comp.pdbx_reference_molecule_related_structures.name";
            Ordinal: "nonpolymer_comp.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "nonpolymer_comp.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "nonpolymer_comp.pdbx_reference_molecule_synonyms.name";
            Ordinal: "nonpolymer_comp.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "nonpolymer_comp.pdbx_reference_molecule_synonyms.prd_id";
            Source: "nonpolymer_comp.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "nonpolymer_comp.rcsb_bird_citation.id";
            JournalAbbrev: "nonpolymer_comp.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "nonpolymer_comp.rcsb_bird_citation.journal_volume";
            PageFirst: "nonpolymer_comp.rcsb_bird_citation.page_first";
            PageLast: "nonpolymer_comp.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "nonpolymer_comp.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "nonpolymer_comp.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "nonpolymer_comp.rcsb_bird_citation.rcsb_authors";
            Title: "nonpolymer_comp.rcsb_bird_citation.title";
            Year: "nonpolymer_comp.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "nonpolymer_comp.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "nonpolymer_comp.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "nonpolymer_comp.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "nonpolymer_comp.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "nonpolymer_comp.rcsb_chem_comp_annotation.assignment_version";
            Description: "nonpolymer_comp.rcsb_chem_comp_annotation.description";
            Name: "nonpolymer_comp.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "nonpolymer_comp.rcsb_chem_comp_annotation.provenance_source";
            Type: "nonpolymer_comp.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "nonpolymer_comp.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "nonpolymer_comp.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "nonpolymer_comp.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "nonpolymer_comp.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "nonpolymer_comp.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "nonpolymer_comp.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "nonpolymer_comp.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "nonpolymer_comp.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "nonpolymer_comp.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "nonpolymer_comp.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "nonpolymer_comp.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "nonpolymer_comp.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "nonpolymer_comp.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "nonpolymer_comp.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "nonpolymer_comp.rcsb_chem_comp_info.release_status";
            RevisionDate: "nonpolymer_comp.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "nonpolymer_comp.rcsb_chem_comp_related.comp_id";
            Ordinal: "nonpolymer_comp.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "nonpolymer_comp.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "nonpolymer_comp.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "nonpolymer_comp.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "nonpolymer_comp.rcsb_chem_comp_synonyms.comp_id";
            Name: "nonpolymer_comp.rcsb_chem_comp_synonyms.name";
            Ordinal: "nonpolymer_comp.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "nonpolymer_comp.rcsb_chem_comp_synonyms.provenance_source";
            Type: "nonpolymer_comp.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "nonpolymer_comp.rcsb_chem_comp_target.comp_id";
            InteractionType: "nonpolymer_comp.rcsb_chem_comp_target.interaction_type";
            Name: "nonpolymer_comp.rcsb_chem_comp_target.name";
            Ordinal: "nonpolymer_comp.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "nonpolymer_comp.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "nonpolymer_comp.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "nonpolymer_comp.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "nonpolymer_comp.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "nonpolymer_comp.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "nonpolymer_comp.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "nonpolymer_comp.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "nonpolymer_comp.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly PdbxEntityNonpoly: {
        CompId: "pdbx_entity_nonpoly.comp_id";
        EntityId: "pdbx_entity_nonpoly.entity_id";
        Name: "pdbx_entity_nonpoly.name";
        RcsbPrdId: "pdbx_entity_nonpoly.rcsb_prd_id";
    };
    static readonly Prd: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "prd.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "prd.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "prd.drugbank.drugbank_info.atc_codes";
                BrandNames: "prd.drugbank.drugbank_info.brand_names";
                CasNumber: "prd.drugbank.drugbank_info.cas_number";
                Description: "prd.drugbank.drugbank_info.description";
                DrugCategories: "prd.drugbank.drugbank_info.drug_categories";
                DrugGroups: "prd.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "prd.drugbank.drugbank_info.drug_products.approved";
                    Country: "prd.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "prd.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "prd.drugbank.drugbank_info.drug_products.name";
                    Source: "prd.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "prd.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "prd.drugbank.drugbank_info.drugbank_id";
                Indication: "prd.drugbank.drugbank_info.indication";
                MechanismOfAction: "prd.drugbank.drugbank_info.mechanism_of_action";
                Name: "prd.drugbank.drugbank_info.name";
                Pharmacology: "prd.drugbank.drugbank_info.pharmacology";
                Synonyms: "prd.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "prd.drugbank.drugbank_target.interaction_type";
                Name: "prd.drugbank.drugbank_target.name";
                Ordinal: "prd.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "prd.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "prd.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "prd.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "prd.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "prd.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "prd.pdbx_chem_comp_audit.action_type";
            CompId: "prd.pdbx_chem_comp_audit.comp_id";
            Date: "prd.pdbx_chem_comp_audit.date";
            Details: "prd.pdbx_chem_comp_audit.details";
            Ordinal: "prd.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "prd.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "prd.pdbx_chem_comp_descriptor.descriptor";
            Program: "prd.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "prd.pdbx_chem_comp_descriptor.program_version";
            Type: "prd.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "prd.pdbx_chem_comp_feature.comp_id";
            Source: "prd.pdbx_chem_comp_feature.source";
            Type: "prd.pdbx_chem_comp_feature.type";
            Value: "prd.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "prd.pdbx_chem_comp_identifier.comp_id";
            Identifier: "prd.pdbx_chem_comp_identifier.identifier";
            Program: "prd.pdbx_chem_comp_identifier.program";
            ProgramVersion: "prd.pdbx_chem_comp_identifier.program_version";
            Type: "prd.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "prd.pdbx_family_prd_audit.action_type";
            Annotator: "prd.pdbx_family_prd_audit.annotator";
            Date: "prd.pdbx_family_prd_audit.date";
            Details: "prd.pdbx_family_prd_audit.details";
            FamilyPrdId: "prd.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "prd.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "prd.pdbx_prd_audit.action_type";
            Annotator: "prd.pdbx_prd_audit.annotator";
            Date: "prd.pdbx_prd_audit.date";
            Details: "prd.pdbx_prd_audit.details";
            PrdId: "prd.pdbx_prd_audit.prd_id";
            ProcessingSite: "prd.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "prd.pdbx_reference_entity_list.component_id";
            Details: "prd.pdbx_reference_entity_list.details";
            PrdId: "prd.pdbx_reference_entity_list.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_list.ref_entity_id";
            Type: "prd.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "prd.pdbx_reference_entity_poly.db_code";
            DbName: "prd.pdbx_reference_entity_poly.db_name";
            PrdId: "prd.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly.ref_entity_id";
            Type: "prd.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "prd.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "prd.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "prd.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "prd.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "prd.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "prd.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "prd.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "prd.pdbx_reference_entity_poly_link.link_id";
            PrdId: "prd.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "prd.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "prd.pdbx_reference_entity_poly_seq.hetero";
            MonId: "prd.pdbx_reference_entity_poly_seq.mon_id";
            Num: "prd.pdbx_reference_entity_poly_seq.num";
            Observed: "prd.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "prd.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "prd.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "prd.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "prd.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "prd.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "prd.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "prd.pdbx_reference_entity_src_nat.atcc";
            DbCode: "prd.pdbx_reference_entity_src_nat.db_code";
            DbName: "prd.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "prd.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "prd.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "prd.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "prd.pdbx_reference_entity_src_nat.source";
            SourceId: "prd.pdbx_reference_entity_src_nat.source_id";
            Taxid: "prd.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "prd.pdbx_reference_molecule.chem_comp_id";
            Class: "prd.pdbx_reference_molecule.class";
            ClassEvidenceCode: "prd.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "prd.pdbx_reference_molecule.compound_details";
            Description: "prd.pdbx_reference_molecule.description";
            Formula: "prd.pdbx_reference_molecule.formula";
            FormulaWeight: "prd.pdbx_reference_molecule.formula_weight";
            Name: "prd.pdbx_reference_molecule.name";
            PrdId: "prd.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "prd.pdbx_reference_molecule.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule.replaced_by";
            Replaces: "prd.pdbx_reference_molecule.replaces";
            RepresentAs: "prd.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "prd.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "prd.pdbx_reference_molecule.type";
            TypeEvidenceCode: "prd.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "prd.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "prd.pdbx_reference_molecule_annotation.prd_id";
            Source: "prd.pdbx_reference_molecule_annotation.source";
            Text: "prd.pdbx_reference_molecule_annotation.text";
            Type: "prd.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "prd.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_details.ordinal";
            Source: "prd.pdbx_reference_molecule_details.source";
            SourceId: "prd.pdbx_reference_molecule_details.source_id";
            Text: "prd.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "prd.pdbx_reference_molecule_family.family_prd_id";
            Name: "prd.pdbx_reference_molecule_family.name";
            ReleaseStatus: "prd.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule_family.replaced_by";
            Replaces: "prd.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "prd.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_features.ordinal";
            PrdId: "prd.pdbx_reference_molecule_features.prd_id";
            Source: "prd.pdbx_reference_molecule_features.source";
            SourceOrdinal: "prd.pdbx_reference_molecule_features.source_ordinal";
            Type: "prd.pdbx_reference_molecule_features.type";
            Value: "prd.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "prd.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "prd.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "prd.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "prd.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "prd.pdbx_reference_molecule_related_structures.db_code";
            DbName: "prd.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "prd.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "prd.pdbx_reference_molecule_related_structures.formula";
            Name: "prd.pdbx_reference_molecule_related_structures.name";
            Ordinal: "prd.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "prd.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "prd.pdbx_reference_molecule_synonyms.name";
            Ordinal: "prd.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "prd.pdbx_reference_molecule_synonyms.prd_id";
            Source: "prd.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "prd.rcsb_bird_citation.id";
            JournalAbbrev: "prd.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "prd.rcsb_bird_citation.journal_volume";
            PageFirst: "prd.rcsb_bird_citation.page_first";
            PageLast: "prd.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "prd.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "prd.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "prd.rcsb_bird_citation.rcsb_authors";
            Title: "prd.rcsb_bird_citation.title";
            Year: "prd.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "prd.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "prd.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "prd.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "prd.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "prd.rcsb_chem_comp_annotation.assignment_version";
            Description: "prd.rcsb_chem_comp_annotation.description";
            Name: "prd.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "prd.rcsb_chem_comp_annotation.provenance_source";
            Type: "prd.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "prd.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "prd.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "prd.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "prd.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "prd.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "prd.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "prd.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "prd.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "prd.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "prd.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "prd.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "prd.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "prd.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "prd.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "prd.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "prd.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "prd.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "prd.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "prd.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "prd.rcsb_chem_comp_info.release_status";
            RevisionDate: "prd.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "prd.rcsb_chem_comp_related.comp_id";
            Ordinal: "prd.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "prd.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "prd.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "prd.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "prd.rcsb_chem_comp_synonyms.comp_id";
            Name: "prd.rcsb_chem_comp_synonyms.name";
            Ordinal: "prd.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_synonyms.provenance_source";
            Type: "prd.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "prd.rcsb_chem_comp_target.comp_id";
            InteractionType: "prd.rcsb_chem_comp_target.interaction_type";
            Name: "prd.rcsb_chem_comp_target.name";
            Ordinal: "prd.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "prd.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "prd.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "prd.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "prd.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "prd.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "prd.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "prd.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbNonpolymerEntity: {
        Details: "rcsb_nonpolymer_entity.details";
        FormulaWeight: "rcsb_nonpolymer_entity.formula_weight";
        PdbxDescription: "rcsb_nonpolymer_entity.pdbx_description";
        PdbxNumberOfMolecules: "rcsb_nonpolymer_entity.pdbx_number_of_molecules";
    };
    static readonly RcsbNonpolymerEntityAnnotation: {
        AnnotationId: "rcsb_nonpolymer_entity_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_nonpolymer_entity_annotation.annotation_lineage.depth";
            Id: "rcsb_nonpolymer_entity_annotation.annotation_lineage.id";
            Name: "rcsb_nonpolymer_entity_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_nonpolymer_entity_annotation.assignment_version";
        CompId: "rcsb_nonpolymer_entity_annotation.comp_id";
        Description: "rcsb_nonpolymer_entity_annotation.description";
        Name: "rcsb_nonpolymer_entity_annotation.name";
        ProvenanceSource: "rcsb_nonpolymer_entity_annotation.provenance_source";
        Type: "rcsb_nonpolymer_entity_annotation.type";
    };
    static readonly RcsbNonpolymerEntityContainerIdentifiers: {
        AsymIds: "rcsb_nonpolymer_entity_container_identifiers.asym_ids";
        AuthAsymIds: "rcsb_nonpolymer_entity_container_identifiers.auth_asym_ids";
        ChemRefDefId: "rcsb_nonpolymer_entity_container_identifiers.chem_ref_def_id";
        EntityId: "rcsb_nonpolymer_entity_container_identifiers.entity_id";
        EntryId: "rcsb_nonpolymer_entity_container_identifiers.entry_id";
        NonpolymerCompId: "rcsb_nonpolymer_entity_container_identifiers.nonpolymer_comp_id";
        PrdId: "rcsb_nonpolymer_entity_container_identifiers.prd_id";
        RcsbId: "rcsb_nonpolymer_entity_container_identifiers.rcsb_id";
        ReferenceChemicalIdentifiersProvenanceSource: "rcsb_nonpolymer_entity_container_identifiers.reference_chemical_identifiers_provenance_source";
        ReferenceChemicalIdentifiersResourceAccession: "rcsb_nonpolymer_entity_container_identifiers.reference_chemical_identifiers_resource_accession";
        ReferenceChemicalIdentifiersResourceName: "rcsb_nonpolymer_entity_container_identifiers.reference_chemical_identifiers_resource_name";
    };
    static readonly RcsbNonpolymerEntityFeature: {
        AdditionalProperties: {
            Name: "rcsb_nonpolymer_entity_feature.additional_properties.name";
            Values: "rcsb_nonpolymer_entity_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_nonpolymer_entity_feature.assignment_version";
        CompId: "rcsb_nonpolymer_entity_feature.comp_id";
        Description: "rcsb_nonpolymer_entity_feature.description";
        FeatureId: "rcsb_nonpolymer_entity_feature.feature_id";
        Name: "rcsb_nonpolymer_entity_feature.name";
        ProvenanceSource: "rcsb_nonpolymer_entity_feature.provenance_source";
        Type: "rcsb_nonpolymer_entity_feature.type";
        Value: "rcsb_nonpolymer_entity_feature.value";
    };
    static readonly RcsbNonpolymerEntityFeatureSummary: {
        CompId: "rcsb_nonpolymer_entity_feature_summary.comp_id";
        Count: "rcsb_nonpolymer_entity_feature_summary.count";
        MaximumLength: "rcsb_nonpolymer_entity_feature_summary.maximum_length";
        MaximumValue: "rcsb_nonpolymer_entity_feature_summary.maximum_value";
        MinimumLength: "rcsb_nonpolymer_entity_feature_summary.minimum_length";
        MinimumValue: "rcsb_nonpolymer_entity_feature_summary.minimum_value";
        Type: "rcsb_nonpolymer_entity_feature_summary.type";
    };
    static readonly RcsbNonpolymerEntityKeywords: {
        Text: "rcsb_nonpolymer_entity_keywords.text";
    };
    static readonly RcsbNonpolymerEntityNameCom: {
        Name: "rcsb_nonpolymer_entity_name_com.name";
    };
}
export declare class CoreNonpolymerEntityInstance {
    static readonly PdbxStructSpecialSymmetry: {
        PdbModelNum: "pdbx_struct_special_symmetry.PDB_model_num";
        AuthSeqId: "pdbx_struct_special_symmetry.auth_seq_id";
        Id: "pdbx_struct_special_symmetry.id";
        LabelAsymId: "pdbx_struct_special_symmetry.label_asym_id";
        LabelCompId: "pdbx_struct_special_symmetry.label_comp_id";
    };
    static readonly PdbxVrptSummaryEntityFitToMap: {
        PdbModelNum: "pdbx_vrpt_summary_entity_fit_to_map.PDB_model_num";
        QScore: "pdbx_vrpt_summary_entity_fit_to_map.Q_score";
        AverageResidueInclusion: "pdbx_vrpt_summary_entity_fit_to_map.average_residue_inclusion";
    };
    static readonly PdbxVrptSummaryEntityGeometry: {
        PdbModelNum: "pdbx_vrpt_summary_entity_geometry.PDB_model_num";
        AnglesRmsz: "pdbx_vrpt_summary_entity_geometry.angles_RMSZ";
        AverageResidueInclusion: "pdbx_vrpt_summary_entity_geometry.average_residue_inclusion";
        BondsRmsz: "pdbx_vrpt_summary_entity_geometry.bonds_RMSZ";
        NumAnglesRmsz: "pdbx_vrpt_summary_entity_geometry.num_angles_RMSZ";
        NumBondsRmsz: "pdbx_vrpt_summary_entity_geometry.num_bonds_RMSZ";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbNonpolymerEntityInstanceContainerIdentifiers: {
        AsymId: "rcsb_nonpolymer_entity_instance_container_identifiers.asym_id";
        AuthAsymId: "rcsb_nonpolymer_entity_instance_container_identifiers.auth_asym_id";
        AuthSeqId: "rcsb_nonpolymer_entity_instance_container_identifiers.auth_seq_id";
        CompId: "rcsb_nonpolymer_entity_instance_container_identifiers.comp_id";
        EntityId: "rcsb_nonpolymer_entity_instance_container_identifiers.entity_id";
        EntryId: "rcsb_nonpolymer_entity_instance_container_identifiers.entry_id";
        RcsbId: "rcsb_nonpolymer_entity_instance_container_identifiers.rcsb_id";
    };
    static readonly RcsbNonpolymerInstanceAnnotation: {
        AnnotationId: "rcsb_nonpolymer_instance_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_nonpolymer_instance_annotation.annotation_lineage.depth";
            Id: "rcsb_nonpolymer_instance_annotation.annotation_lineage.id";
            Name: "rcsb_nonpolymer_instance_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_nonpolymer_instance_annotation.assignment_version";
        CompId: "rcsb_nonpolymer_instance_annotation.comp_id";
        Description: "rcsb_nonpolymer_instance_annotation.description";
        Name: "rcsb_nonpolymer_instance_annotation.name";
        Ordinal: "rcsb_nonpolymer_instance_annotation.ordinal";
        ProvenanceSource: "rcsb_nonpolymer_instance_annotation.provenance_source";
        Type: "rcsb_nonpolymer_instance_annotation.type";
    };
    static readonly RcsbNonpolymerInstanceFeature: {
        AdditionalProperties: {
            Name: "rcsb_nonpolymer_instance_feature.additional_properties.name";
            Values: "rcsb_nonpolymer_instance_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_nonpolymer_instance_feature.assignment_version";
        CompId: "rcsb_nonpolymer_instance_feature.comp_id";
        Description: "rcsb_nonpolymer_instance_feature.description";
        FeatureId: "rcsb_nonpolymer_instance_feature.feature_id";
        FeatureValue: {
            CompId: "rcsb_nonpolymer_instance_feature.feature_value.comp_id";
            Details: "rcsb_nonpolymer_instance_feature.feature_value.details";
            Reference: "rcsb_nonpolymer_instance_feature.feature_value.reference";
            Reported: "rcsb_nonpolymer_instance_feature.feature_value.reported";
            UncertaintyEstimate: "rcsb_nonpolymer_instance_feature.feature_value.uncertainty_estimate";
            UncertaintyEstimateType: "rcsb_nonpolymer_instance_feature.feature_value.uncertainty_estimate_type";
        };
        Name: "rcsb_nonpolymer_instance_feature.name";
        Ordinal: "rcsb_nonpolymer_instance_feature.ordinal";
        ProvenanceSource: "rcsb_nonpolymer_instance_feature.provenance_source";
        Type: "rcsb_nonpolymer_instance_feature.type";
    };
    static readonly RcsbNonpolymerInstanceFeatureSummary: {
        CompId: "rcsb_nonpolymer_instance_feature_summary.comp_id";
        Count: "rcsb_nonpolymer_instance_feature_summary.count";
        Coverage: "rcsb_nonpolymer_instance_feature_summary.coverage";
        MaximumLength: "rcsb_nonpolymer_instance_feature_summary.maximum_length";
        MaximumValue: "rcsb_nonpolymer_instance_feature_summary.maximum_value";
        MinimumLength: "rcsb_nonpolymer_instance_feature_summary.minimum_length";
        MinimumValue: "rcsb_nonpolymer_instance_feature_summary.minimum_value";
        Type: "rcsb_nonpolymer_instance_feature_summary.type";
    };
    static readonly RcsbNonpolymerInstanceValidationScore: {
        Rscc: "rcsb_nonpolymer_instance_validation_score.RSCC";
        Rsr: "rcsb_nonpolymer_instance_validation_score.RSR";
        AltId: "rcsb_nonpolymer_instance_validation_score.alt_id";
        AverageOccupancy: "rcsb_nonpolymer_instance_validation_score.average_occupancy";
        Completeness: "rcsb_nonpolymer_instance_validation_score.completeness";
        IntermolecularClashes: "rcsb_nonpolymer_instance_validation_score.intermolecular_clashes";
        IsBestInstance: "rcsb_nonpolymer_instance_validation_score.is_best_instance";
        IsSubjectOfInvestigation: "rcsb_nonpolymer_instance_validation_score.is_subject_of_investigation";
        IsSubjectOfInvestigationProvenance: "rcsb_nonpolymer_instance_validation_score.is_subject_of_investigation_provenance";
        MogulAngleOutliers: "rcsb_nonpolymer_instance_validation_score.mogul_angle_outliers";
        MogulAnglesRmsz: "rcsb_nonpolymer_instance_validation_score.mogul_angles_RMSZ";
        MogulBondOutliers: "rcsb_nonpolymer_instance_validation_score.mogul_bond_outliers";
        MogulBondsRmsz: "rcsb_nonpolymer_instance_validation_score.mogul_bonds_RMSZ";
        NatomsEds: "rcsb_nonpolymer_instance_validation_score.natoms_eds";
        NumMogulAnglesRmsz: "rcsb_nonpolymer_instance_validation_score.num_mogul_angles_RMSZ";
        NumMogulBondsRmsz: "rcsb_nonpolymer_instance_validation_score.num_mogul_bonds_RMSZ";
        RankingModelFit: "rcsb_nonpolymer_instance_validation_score.ranking_model_fit";
        RankingModelGeometry: "rcsb_nonpolymer_instance_validation_score.ranking_model_geometry";
        ScoreModelFit: "rcsb_nonpolymer_instance_validation_score.score_model_fit";
        ScoreModelGeometry: "rcsb_nonpolymer_instance_validation_score.score_model_geometry";
        StereoOutliers: "rcsb_nonpolymer_instance_validation_score.stereo_outliers";
        Type: "rcsb_nonpolymer_instance_validation_score.type";
    };
    static readonly RcsbNonpolymerStructConn: {
        ConnectPartner: {
            LabelAltId: "rcsb_nonpolymer_struct_conn.connect_partner.label_alt_id";
            LabelAsymId: "rcsb_nonpolymer_struct_conn.connect_partner.label_asym_id";
            LabelAtomId: "rcsb_nonpolymer_struct_conn.connect_partner.label_atom_id";
            LabelCompId: "rcsb_nonpolymer_struct_conn.connect_partner.label_comp_id";
            LabelSeqId: "rcsb_nonpolymer_struct_conn.connect_partner.label_seq_id";
            Symmetry: "rcsb_nonpolymer_struct_conn.connect_partner.symmetry";
        };
        ConnectTarget: {
            AuthAsymId: "rcsb_nonpolymer_struct_conn.connect_target.auth_asym_id";
            AuthSeqId: "rcsb_nonpolymer_struct_conn.connect_target.auth_seq_id";
            LabelAltId: "rcsb_nonpolymer_struct_conn.connect_target.label_alt_id";
            LabelAsymId: "rcsb_nonpolymer_struct_conn.connect_target.label_asym_id";
            LabelAtomId: "rcsb_nonpolymer_struct_conn.connect_target.label_atom_id";
            LabelCompId: "rcsb_nonpolymer_struct_conn.connect_target.label_comp_id";
            LabelSeqId: "rcsb_nonpolymer_struct_conn.connect_target.label_seq_id";
            Symmetry: "rcsb_nonpolymer_struct_conn.connect_target.symmetry";
        };
        ConnectType: "rcsb_nonpolymer_struct_conn.connect_type";
        Description: "rcsb_nonpolymer_struct_conn.description";
        DistValue: "rcsb_nonpolymer_struct_conn.dist_value";
        Id: "rcsb_nonpolymer_struct_conn.id";
        OrdinalId: "rcsb_nonpolymer_struct_conn.ordinal_id";
        Role: "rcsb_nonpolymer_struct_conn.role";
        ValueOrder: "rcsb_nonpolymer_struct_conn.value_order";
    };
    static readonly RcsbTargetNeighbors: {
        AltId: "rcsb_target_neighbors.alt_id";
        AtomId: "rcsb_target_neighbors.atom_id";
        CompId: "rcsb_target_neighbors.comp_id";
        Distance: "rcsb_target_neighbors.distance";
        TargetAsymId: "rcsb_target_neighbors.target_asym_id";
        TargetAtomId: "rcsb_target_neighbors.target_atom_id";
        TargetAuthSeqId: "rcsb_target_neighbors.target_auth_seq_id";
        TargetCompId: "rcsb_target_neighbors.target_comp_id";
        TargetEntityId: "rcsb_target_neighbors.target_entity_id";
        TargetIsBound: "rcsb_target_neighbors.target_is_bound";
        TargetModelId: "rcsb_target_neighbors.target_model_id";
        TargetSeqId: "rcsb_target_neighbors.target_seq_id";
    };
    static readonly StructAsym: {
        PdbxPdbId: "struct_asym.pdbx_PDB_id";
        PdbxAltId: "struct_asym.pdbx_alt_id";
        PdbxOrder: "struct_asym.pdbx_order";
        PdbxType: "struct_asym.pdbx_type";
    };
}
export declare class CorePolymerEntity {
    static readonly ChemCompMonomers: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "chem_comp_monomers.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "chem_comp_monomers.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "chem_comp_monomers.drugbank.drugbank_info.atc_codes";
                BrandNames: "chem_comp_monomers.drugbank.drugbank_info.brand_names";
                CasNumber: "chem_comp_monomers.drugbank.drugbank_info.cas_number";
                Description: "chem_comp_monomers.drugbank.drugbank_info.description";
                DrugCategories: "chem_comp_monomers.drugbank.drugbank_info.drug_categories";
                DrugGroups: "chem_comp_monomers.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "chem_comp_monomers.drugbank.drugbank_info.drug_products.approved";
                    Country: "chem_comp_monomers.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "chem_comp_monomers.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "chem_comp_monomers.drugbank.drugbank_info.drug_products.name";
                    Source: "chem_comp_monomers.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "chem_comp_monomers.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "chem_comp_monomers.drugbank.drugbank_info.drugbank_id";
                Indication: "chem_comp_monomers.drugbank.drugbank_info.indication";
                MechanismOfAction: "chem_comp_monomers.drugbank.drugbank_info.mechanism_of_action";
                Name: "chem_comp_monomers.drugbank.drugbank_info.name";
                Pharmacology: "chem_comp_monomers.drugbank.drugbank_info.pharmacology";
                Synonyms: "chem_comp_monomers.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "chem_comp_monomers.drugbank.drugbank_target.interaction_type";
                Name: "chem_comp_monomers.drugbank.drugbank_target.name";
                Ordinal: "chem_comp_monomers.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "chem_comp_monomers.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "chem_comp_monomers.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "chem_comp_monomers.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "chem_comp_monomers.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "chem_comp_monomers.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "chem_comp_monomers.pdbx_chem_comp_audit.action_type";
            CompId: "chem_comp_monomers.pdbx_chem_comp_audit.comp_id";
            Date: "chem_comp_monomers.pdbx_chem_comp_audit.date";
            Details: "chem_comp_monomers.pdbx_chem_comp_audit.details";
            Ordinal: "chem_comp_monomers.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "chem_comp_monomers.pdbx_chem_comp_descriptor.descriptor";
            Program: "chem_comp_monomers.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "chem_comp_monomers.pdbx_chem_comp_descriptor.program_version";
            Type: "chem_comp_monomers.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_feature.comp_id";
            Source: "chem_comp_monomers.pdbx_chem_comp_feature.source";
            Type: "chem_comp_monomers.pdbx_chem_comp_feature.type";
            Value: "chem_comp_monomers.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "chem_comp_monomers.pdbx_chem_comp_identifier.comp_id";
            Identifier: "chem_comp_monomers.pdbx_chem_comp_identifier.identifier";
            Program: "chem_comp_monomers.pdbx_chem_comp_identifier.program";
            ProgramVersion: "chem_comp_monomers.pdbx_chem_comp_identifier.program_version";
            Type: "chem_comp_monomers.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "chem_comp_monomers.pdbx_family_prd_audit.action_type";
            Annotator: "chem_comp_monomers.pdbx_family_prd_audit.annotator";
            Date: "chem_comp_monomers.pdbx_family_prd_audit.date";
            Details: "chem_comp_monomers.pdbx_family_prd_audit.details";
            FamilyPrdId: "chem_comp_monomers.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "chem_comp_monomers.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "chem_comp_monomers.pdbx_prd_audit.action_type";
            Annotator: "chem_comp_monomers.pdbx_prd_audit.annotator";
            Date: "chem_comp_monomers.pdbx_prd_audit.date";
            Details: "chem_comp_monomers.pdbx_prd_audit.details";
            PrdId: "chem_comp_monomers.pdbx_prd_audit.prd_id";
            ProcessingSite: "chem_comp_monomers.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "chem_comp_monomers.pdbx_reference_entity_list.component_id";
            Details: "chem_comp_monomers.pdbx_reference_entity_list.details";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_list.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_list.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "chem_comp_monomers.pdbx_reference_entity_poly.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_entity_poly.db_name";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "chem_comp_monomers.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "chem_comp_monomers.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "chem_comp_monomers.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "chem_comp_monomers.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "chem_comp_monomers.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "chem_comp_monomers.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "chem_comp_monomers.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "chem_comp_monomers.pdbx_reference_entity_poly_link.link_id";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "chem_comp_monomers.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "chem_comp_monomers.pdbx_reference_entity_poly_seq.hetero";
            MonId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.mon_id";
            Num: "chem_comp_monomers.pdbx_reference_entity_poly_seq.num";
            Observed: "chem_comp_monomers.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "chem_comp_monomers.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "chem_comp_monomers.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "chem_comp_monomers.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "chem_comp_monomers.pdbx_reference_entity_src_nat.atcc";
            DbCode: "chem_comp_monomers.pdbx_reference_entity_src_nat.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "chem_comp_monomers.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "chem_comp_monomers.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "chem_comp_monomers.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "chem_comp_monomers.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "chem_comp_monomers.pdbx_reference_entity_src_nat.source";
            SourceId: "chem_comp_monomers.pdbx_reference_entity_src_nat.source_id";
            Taxid: "chem_comp_monomers.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "chem_comp_monomers.pdbx_reference_molecule.chem_comp_id";
            Class: "chem_comp_monomers.pdbx_reference_molecule.class";
            ClassEvidenceCode: "chem_comp_monomers.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "chem_comp_monomers.pdbx_reference_molecule.compound_details";
            Description: "chem_comp_monomers.pdbx_reference_molecule.description";
            Formula: "chem_comp_monomers.pdbx_reference_molecule.formula";
            FormulaWeight: "chem_comp_monomers.pdbx_reference_molecule.formula_weight";
            Name: "chem_comp_monomers.pdbx_reference_molecule.name";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "chem_comp_monomers.pdbx_reference_molecule.release_status";
            ReplacedBy: "chem_comp_monomers.pdbx_reference_molecule.replaced_by";
            Replaces: "chem_comp_monomers.pdbx_reference_molecule.replaces";
            RepresentAs: "chem_comp_monomers.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "chem_comp_monomers.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "chem_comp_monomers.pdbx_reference_molecule.type";
            TypeEvidenceCode: "chem_comp_monomers.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_annotation.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_annotation.source";
            Text: "chem_comp_monomers.pdbx_reference_molecule_annotation.text";
            Type: "chem_comp_monomers.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_details.ordinal";
            Source: "chem_comp_monomers.pdbx_reference_molecule_details.source";
            SourceId: "chem_comp_monomers.pdbx_reference_molecule_details.source_id";
            Text: "chem_comp_monomers.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_family.family_prd_id";
            Name: "chem_comp_monomers.pdbx_reference_molecule_family.name";
            ReleaseStatus: "chem_comp_monomers.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "chem_comp_monomers.pdbx_reference_molecule_family.replaced_by";
            Replaces: "chem_comp_monomers.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_features.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_features.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_features.source";
            SourceOrdinal: "chem_comp_monomers.pdbx_reference_molecule_features.source_ordinal";
            Type: "chem_comp_monomers.pdbx_reference_molecule_features.type";
            Value: "chem_comp_monomers.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "chem_comp_monomers.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_code";
            DbName: "chem_comp_monomers.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "chem_comp_monomers.pdbx_reference_molecule_related_structures.formula";
            Name: "chem_comp_monomers.pdbx_reference_molecule_related_structures.name";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "chem_comp_monomers.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "chem_comp_monomers.pdbx_reference_molecule_synonyms.name";
            Ordinal: "chem_comp_monomers.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "chem_comp_monomers.pdbx_reference_molecule_synonyms.prd_id";
            Source: "chem_comp_monomers.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "chem_comp_monomers.rcsb_bird_citation.id";
            JournalAbbrev: "chem_comp_monomers.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "chem_comp_monomers.rcsb_bird_citation.journal_volume";
            PageFirst: "chem_comp_monomers.rcsb_bird_citation.page_first";
            PageLast: "chem_comp_monomers.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "chem_comp_monomers.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "chem_comp_monomers.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "chem_comp_monomers.rcsb_bird_citation.rcsb_authors";
            Title: "chem_comp_monomers.rcsb_bird_citation.title";
            Year: "chem_comp_monomers.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "chem_comp_monomers.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "chem_comp_monomers.rcsb_chem_comp_annotation.assignment_version";
            Description: "chem_comp_monomers.rcsb_chem_comp_annotation.description";
            Name: "chem_comp_monomers.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_annotation.provenance_source";
            Type: "chem_comp_monomers.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "chem_comp_monomers.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "chem_comp_monomers.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "chem_comp_monomers.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "chem_comp_monomers.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "chem_comp_monomers.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "chem_comp_monomers.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "chem_comp_monomers.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "chem_comp_monomers.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "chem_comp_monomers.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "chem_comp_monomers.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "chem_comp_monomers.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "chem_comp_monomers.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "chem_comp_monomers.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "chem_comp_monomers.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "chem_comp_monomers.rcsb_chem_comp_info.release_status";
            RevisionDate: "chem_comp_monomers.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_related.comp_id";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "chem_comp_monomers.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "chem_comp_monomers.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "chem_comp_monomers.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_synonyms.comp_id";
            Name: "chem_comp_monomers.rcsb_chem_comp_synonyms.name";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_synonyms.provenance_source";
            Type: "chem_comp_monomers.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "chem_comp_monomers.rcsb_chem_comp_target.comp_id";
            InteractionType: "chem_comp_monomers.rcsb_chem_comp_target.interaction_type";
            Name: "chem_comp_monomers.rcsb_chem_comp_target.name";
            Ordinal: "chem_comp_monomers.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "chem_comp_monomers.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "chem_comp_monomers.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "chem_comp_monomers.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "chem_comp_monomers.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "chem_comp_monomers.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "chem_comp_monomers.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "chem_comp_monomers.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "chem_comp_monomers.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly ChemCompNstdMonomers: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "chem_comp_nstd_monomers.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "chem_comp_nstd_monomers.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "chem_comp_nstd_monomers.drugbank.drugbank_info.atc_codes";
                BrandNames: "chem_comp_nstd_monomers.drugbank.drugbank_info.brand_names";
                CasNumber: "chem_comp_nstd_monomers.drugbank.drugbank_info.cas_number";
                Description: "chem_comp_nstd_monomers.drugbank.drugbank_info.description";
                DrugCategories: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_categories";
                DrugGroups: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.approved";
                    Country: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.name";
                    Source: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "chem_comp_nstd_monomers.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "chem_comp_nstd_monomers.drugbank.drugbank_info.drugbank_id";
                Indication: "chem_comp_nstd_monomers.drugbank.drugbank_info.indication";
                MechanismOfAction: "chem_comp_nstd_monomers.drugbank.drugbank_info.mechanism_of_action";
                Name: "chem_comp_nstd_monomers.drugbank.drugbank_info.name";
                Pharmacology: "chem_comp_nstd_monomers.drugbank.drugbank_info.pharmacology";
                Synonyms: "chem_comp_nstd_monomers.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "chem_comp_nstd_monomers.drugbank.drugbank_target.interaction_type";
                Name: "chem_comp_nstd_monomers.drugbank.drugbank_target.name";
                Ordinal: "chem_comp_nstd_monomers.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "chem_comp_nstd_monomers.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "chem_comp_nstd_monomers.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "chem_comp_nstd_monomers.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "chem_comp_nstd_monomers.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "chem_comp_nstd_monomers.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "chem_comp_nstd_monomers.pdbx_chem_comp_audit.action_type";
            CompId: "chem_comp_nstd_monomers.pdbx_chem_comp_audit.comp_id";
            Date: "chem_comp_nstd_monomers.pdbx_chem_comp_audit.date";
            Details: "chem_comp_nstd_monomers.pdbx_chem_comp_audit.details";
            Ordinal: "chem_comp_nstd_monomers.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "chem_comp_nstd_monomers.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "chem_comp_nstd_monomers.pdbx_chem_comp_descriptor.descriptor";
            Program: "chem_comp_nstd_monomers.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "chem_comp_nstd_monomers.pdbx_chem_comp_descriptor.program_version";
            Type: "chem_comp_nstd_monomers.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "chem_comp_nstd_monomers.pdbx_chem_comp_feature.comp_id";
            Source: "chem_comp_nstd_monomers.pdbx_chem_comp_feature.source";
            Type: "chem_comp_nstd_monomers.pdbx_chem_comp_feature.type";
            Value: "chem_comp_nstd_monomers.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "chem_comp_nstd_monomers.pdbx_chem_comp_identifier.comp_id";
            Identifier: "chem_comp_nstd_monomers.pdbx_chem_comp_identifier.identifier";
            Program: "chem_comp_nstd_monomers.pdbx_chem_comp_identifier.program";
            ProgramVersion: "chem_comp_nstd_monomers.pdbx_chem_comp_identifier.program_version";
            Type: "chem_comp_nstd_monomers.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "chem_comp_nstd_monomers.pdbx_family_prd_audit.action_type";
            Annotator: "chem_comp_nstd_monomers.pdbx_family_prd_audit.annotator";
            Date: "chem_comp_nstd_monomers.pdbx_family_prd_audit.date";
            Details: "chem_comp_nstd_monomers.pdbx_family_prd_audit.details";
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "chem_comp_nstd_monomers.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "chem_comp_nstd_monomers.pdbx_prd_audit.action_type";
            Annotator: "chem_comp_nstd_monomers.pdbx_prd_audit.annotator";
            Date: "chem_comp_nstd_monomers.pdbx_prd_audit.date";
            Details: "chem_comp_nstd_monomers.pdbx_prd_audit.details";
            PrdId: "chem_comp_nstd_monomers.pdbx_prd_audit.prd_id";
            ProcessingSite: "chem_comp_nstd_monomers.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "chem_comp_nstd_monomers.pdbx_reference_entity_list.component_id";
            Details: "chem_comp_nstd_monomers.pdbx_reference_entity_list.details";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_list.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_list.ref_entity_id";
            Type: "chem_comp_nstd_monomers.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "chem_comp_nstd_monomers.pdbx_reference_entity_poly.db_code";
            DbName: "chem_comp_nstd_monomers.pdbx_reference_entity_poly.db_name";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly.ref_entity_id";
            Type: "chem_comp_nstd_monomers.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.link_id";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.hetero";
            MonId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.mon_id";
            Num: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.num";
            Observed: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "chem_comp_nstd_monomers.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "chem_comp_nstd_monomers.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "chem_comp_nstd_monomers.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.atcc";
            DbCode: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.db_code";
            DbName: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.source";
            SourceId: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.source_id";
            Taxid: "chem_comp_nstd_monomers.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "chem_comp_nstd_monomers.pdbx_reference_molecule.chem_comp_id";
            Class: "chem_comp_nstd_monomers.pdbx_reference_molecule.class";
            ClassEvidenceCode: "chem_comp_nstd_monomers.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "chem_comp_nstd_monomers.pdbx_reference_molecule.compound_details";
            Description: "chem_comp_nstd_monomers.pdbx_reference_molecule.description";
            Formula: "chem_comp_nstd_monomers.pdbx_reference_molecule.formula";
            FormulaWeight: "chem_comp_nstd_monomers.pdbx_reference_molecule.formula_weight";
            Name: "chem_comp_nstd_monomers.pdbx_reference_molecule.name";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "chem_comp_nstd_monomers.pdbx_reference_molecule.release_status";
            ReplacedBy: "chem_comp_nstd_monomers.pdbx_reference_molecule.replaced_by";
            Replaces: "chem_comp_nstd_monomers.pdbx_reference_molecule.replaces";
            RepresentAs: "chem_comp_nstd_monomers.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "chem_comp_nstd_monomers.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "chem_comp_nstd_monomers.pdbx_reference_molecule.type";
            TypeEvidenceCode: "chem_comp_nstd_monomers.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.prd_id";
            Source: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.source";
            Text: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.text";
            Type: "chem_comp_nstd_monomers.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_details.ordinal";
            Source: "chem_comp_nstd_monomers.pdbx_reference_molecule_details.source";
            SourceId: "chem_comp_nstd_monomers.pdbx_reference_molecule_details.source_id";
            Text: "chem_comp_nstd_monomers.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_family.family_prd_id";
            Name: "chem_comp_nstd_monomers.pdbx_reference_molecule_family.name";
            ReleaseStatus: "chem_comp_nstd_monomers.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "chem_comp_nstd_monomers.pdbx_reference_molecule_family.replaced_by";
            Replaces: "chem_comp_nstd_monomers.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.ordinal";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.prd_id";
            Source: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.source";
            SourceOrdinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.source_ordinal";
            Type: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.type";
            Value: "chem_comp_nstd_monomers.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.db_code";
            DbName: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.formula";
            Name: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.name";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "chem_comp_nstd_monomers.pdbx_reference_molecule_synonyms.name";
            Ordinal: "chem_comp_nstd_monomers.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "chem_comp_nstd_monomers.pdbx_reference_molecule_synonyms.prd_id";
            Source: "chem_comp_nstd_monomers.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "chem_comp_nstd_monomers.rcsb_bird_citation.id";
            JournalAbbrev: "chem_comp_nstd_monomers.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "chem_comp_nstd_monomers.rcsb_bird_citation.journal_volume";
            PageFirst: "chem_comp_nstd_monomers.rcsb_bird_citation.page_first";
            PageLast: "chem_comp_nstd_monomers.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "chem_comp_nstd_monomers.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "chem_comp_nstd_monomers.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "chem_comp_nstd_monomers.rcsb_bird_citation.rcsb_authors";
            Title: "chem_comp_nstd_monomers.rcsb_bird_citation.title";
            Year: "chem_comp_nstd_monomers.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.assignment_version";
            Description: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.description";
            Name: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.provenance_source";
            Type: "chem_comp_nstd_monomers.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "chem_comp_nstd_monomers.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "chem_comp_nstd_monomers.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "chem_comp_nstd_monomers.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "chem_comp_nstd_monomers.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "chem_comp_nstd_monomers.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "chem_comp_nstd_monomers.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "chem_comp_nstd_monomers.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "chem_comp_nstd_monomers.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "chem_comp_nstd_monomers.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "chem_comp_nstd_monomers.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "chem_comp_nstd_monomers.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "chem_comp_nstd_monomers.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "chem_comp_nstd_monomers.rcsb_chem_comp_info.release_status";
            RevisionDate: "chem_comp_nstd_monomers.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_related.comp_id";
            Ordinal: "chem_comp_nstd_monomers.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "chem_comp_nstd_monomers.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "chem_comp_nstd_monomers.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "chem_comp_nstd_monomers.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_synonyms.comp_id";
            Name: "chem_comp_nstd_monomers.rcsb_chem_comp_synonyms.name";
            Ordinal: "chem_comp_nstd_monomers.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "chem_comp_nstd_monomers.rcsb_chem_comp_synonyms.provenance_source";
            Type: "chem_comp_nstd_monomers.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "chem_comp_nstd_monomers.rcsb_chem_comp_target.comp_id";
            InteractionType: "chem_comp_nstd_monomers.rcsb_chem_comp_target.interaction_type";
            Name: "chem_comp_nstd_monomers.rcsb_chem_comp_target.name";
            Ordinal: "chem_comp_nstd_monomers.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "chem_comp_nstd_monomers.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "chem_comp_nstd_monomers.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "chem_comp_nstd_monomers.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "chem_comp_nstd_monomers.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "chem_comp_nstd_monomers.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "chem_comp_nstd_monomers.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "chem_comp_nstd_monomers.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "chem_comp_nstd_monomers.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly EntityPoly: {
        NstdLinkage: "entity_poly.nstd_linkage";
        NstdMonomer: "entity_poly.nstd_monomer";
        PdbxSeqOneLetterCode: "entity_poly.pdbx_seq_one_letter_code";
        PdbxSeqOneLetterCodeCan: "entity_poly.pdbx_seq_one_letter_code_can";
        PdbxSequenceEvidenceCode: "entity_poly.pdbx_sequence_evidence_code";
        PdbxStrandId: "entity_poly.pdbx_strand_id";
        PdbxTargetIdentifier: "entity_poly.pdbx_target_identifier";
        RcsbArtifactMonomerCount: "entity_poly.rcsb_artifact_monomer_count";
        RcsbConflictCount: "entity_poly.rcsb_conflict_count";
        RcsbDeletionCount: "entity_poly.rcsb_deletion_count";
        RcsbEntityPolymerType: "entity_poly.rcsb_entity_polymer_type";
        RcsbInsertionCount: "entity_poly.rcsb_insertion_count";
        RcsbMutationCount: "entity_poly.rcsb_mutation_count";
        RcsbNonStdMonomerCount: "entity_poly.rcsb_non_std_monomer_count";
        RcsbNonStdMonomers: "entity_poly.rcsb_non_std_monomers";
        RcsbPrdId: "entity_poly.rcsb_prd_id";
        RcsbSampleSequenceLength: "entity_poly.rcsb_sample_sequence_length";
        Type: "entity_poly.type";
    };
    static readonly EntitySrcGen: {
        ExpressionSystemId: "entity_src_gen.expression_system_id";
        GeneSrcCommonName: "entity_src_gen.gene_src_common_name";
        GeneSrcDetails: "entity_src_gen.gene_src_details";
        GeneSrcGenus: "entity_src_gen.gene_src_genus";
        GeneSrcSpecies: "entity_src_gen.gene_src_species";
        GeneSrcStrain: "entity_src_gen.gene_src_strain";
        GeneSrcTissue: "entity_src_gen.gene_src_tissue";
        GeneSrcTissueFraction: "entity_src_gen.gene_src_tissue_fraction";
        HostOrgCommonName: "entity_src_gen.host_org_common_name";
        HostOrgDetails: "entity_src_gen.host_org_details";
        HostOrgGenus: "entity_src_gen.host_org_genus";
        HostOrgSpecies: "entity_src_gen.host_org_species";
        PdbxAltSourceFlag: "entity_src_gen.pdbx_alt_source_flag";
        PdbxBegSeqNum: "entity_src_gen.pdbx_beg_seq_num";
        PdbxDescription: "entity_src_gen.pdbx_description";
        PdbxEndSeqNum: "entity_src_gen.pdbx_end_seq_num";
        PdbxGeneSrcAtcc: "entity_src_gen.pdbx_gene_src_atcc";
        PdbxGeneSrcCell: "entity_src_gen.pdbx_gene_src_cell";
        PdbxGeneSrcCellLine: "entity_src_gen.pdbx_gene_src_cell_line";
        PdbxGeneSrcCellularLocation: "entity_src_gen.pdbx_gene_src_cellular_location";
        PdbxGeneSrcFragment: "entity_src_gen.pdbx_gene_src_fragment";
        PdbxGeneSrcGene: "entity_src_gen.pdbx_gene_src_gene";
        PdbxGeneSrcNcbiTaxonomyId: "entity_src_gen.pdbx_gene_src_ncbi_taxonomy_id";
        PdbxGeneSrcOrgan: "entity_src_gen.pdbx_gene_src_organ";
        PdbxGeneSrcOrganelle: "entity_src_gen.pdbx_gene_src_organelle";
        PdbxGeneSrcScientificName: "entity_src_gen.pdbx_gene_src_scientific_name";
        PdbxGeneSrcVariant: "entity_src_gen.pdbx_gene_src_variant";
        PdbxHostOrgAtcc: "entity_src_gen.pdbx_host_org_atcc";
        PdbxHostOrgCell: "entity_src_gen.pdbx_host_org_cell";
        PdbxHostOrgCellLine: "entity_src_gen.pdbx_host_org_cell_line";
        PdbxHostOrgCellularLocation: "entity_src_gen.pdbx_host_org_cellular_location";
        PdbxHostOrgCultureCollection: "entity_src_gen.pdbx_host_org_culture_collection";
        PdbxHostOrgGene: "entity_src_gen.pdbx_host_org_gene";
        PdbxHostOrgNcbiTaxonomyId: "entity_src_gen.pdbx_host_org_ncbi_taxonomy_id";
        PdbxHostOrgOrgan: "entity_src_gen.pdbx_host_org_organ";
        PdbxHostOrgOrganelle: "entity_src_gen.pdbx_host_org_organelle";
        PdbxHostOrgScientificName: "entity_src_gen.pdbx_host_org_scientific_name";
        PdbxHostOrgStrain: "entity_src_gen.pdbx_host_org_strain";
        PdbxHostOrgTissue: "entity_src_gen.pdbx_host_org_tissue";
        PdbxHostOrgTissueFraction: "entity_src_gen.pdbx_host_org_tissue_fraction";
        PdbxHostOrgVariant: "entity_src_gen.pdbx_host_org_variant";
        PdbxHostOrgVector: "entity_src_gen.pdbx_host_org_vector";
        PdbxHostOrgVectorType: "entity_src_gen.pdbx_host_org_vector_type";
        PdbxSeqType: "entity_src_gen.pdbx_seq_type";
        PdbxSrcId: "entity_src_gen.pdbx_src_id";
        PlasmidDetails: "entity_src_gen.plasmid_details";
        PlasmidName: "entity_src_gen.plasmid_name";
    };
    static readonly EntitySrcNat: {
        CommonName: "entity_src_nat.common_name";
        Details: "entity_src_nat.details";
        Genus: "entity_src_nat.genus";
        PdbxAltSourceFlag: "entity_src_nat.pdbx_alt_source_flag";
        PdbxAtcc: "entity_src_nat.pdbx_atcc";
        PdbxBegSeqNum: "entity_src_nat.pdbx_beg_seq_num";
        PdbxCell: "entity_src_nat.pdbx_cell";
        PdbxCellLine: "entity_src_nat.pdbx_cell_line";
        PdbxCellularLocation: "entity_src_nat.pdbx_cellular_location";
        PdbxEndSeqNum: "entity_src_nat.pdbx_end_seq_num";
        PdbxFragment: "entity_src_nat.pdbx_fragment";
        PdbxNcbiTaxonomyId: "entity_src_nat.pdbx_ncbi_taxonomy_id";
        PdbxOrgan: "entity_src_nat.pdbx_organ";
        PdbxOrganelle: "entity_src_nat.pdbx_organelle";
        PdbxOrganismScientific: "entity_src_nat.pdbx_organism_scientific";
        PdbxPlasmidDetails: "entity_src_nat.pdbx_plasmid_details";
        PdbxPlasmidName: "entity_src_nat.pdbx_plasmid_name";
        PdbxSecretion: "entity_src_nat.pdbx_secretion";
        PdbxSrcId: "entity_src_nat.pdbx_src_id";
        PdbxVariant: "entity_src_nat.pdbx_variant";
        Species: "entity_src_nat.species";
        Strain: "entity_src_nat.strain";
        Tissue: "entity_src_nat.tissue";
        TissueFraction: "entity_src_nat.tissue_fraction";
    };
    static readonly PdbxEntitySrcSyn: {
        Details: "pdbx_entity_src_syn.details";
        NcbiTaxonomyId: "pdbx_entity_src_syn.ncbi_taxonomy_id";
        OrganismCommonName: "pdbx_entity_src_syn.organism_common_name";
        OrganismScientific: "pdbx_entity_src_syn.organism_scientific";
        PdbxAltSourceFlag: "pdbx_entity_src_syn.pdbx_alt_source_flag";
        PdbxBegSeqNum: "pdbx_entity_src_syn.pdbx_beg_seq_num";
        PdbxEndSeqNum: "pdbx_entity_src_syn.pdbx_end_seq_num";
        PdbxSrcId: "pdbx_entity_src_syn.pdbx_src_id";
    };
    static readonly Pfams: {
        RcsbId: "pfams.rcsb_id";
        RcsbPfamAccession: "pfams.rcsb_pfam_accession";
        RcsbPfamClanId: "pfams.rcsb_pfam_clan_id";
        RcsbPfamComment: "pfams.rcsb_pfam_comment";
        RcsbPfamContainerIdentifiers: {
            PfamId: "pfams.rcsb_pfam_container_identifiers.pfam_id";
        };
        RcsbPfamDescription: "pfams.rcsb_pfam_description";
        RcsbPfamIdentifier: "pfams.rcsb_pfam_identifier";
        RcsbPfamProvenanceCode: "pfams.rcsb_pfam_provenance_code";
        RcsbPfamSeedSource: "pfams.rcsb_pfam_seed_source";
    };
    static readonly Prd: {
        Drugbank: {
            DrugbankContainerIdentifiers: {
                DrugbankId: "prd.drugbank.drugbank_container_identifiers.drugbank_id";
            };
            DrugbankInfo: {
                AffectedOrganisms: "prd.drugbank.drugbank_info.affected_organisms";
                AtcCodes: "prd.drugbank.drugbank_info.atc_codes";
                BrandNames: "prd.drugbank.drugbank_info.brand_names";
                CasNumber: "prd.drugbank.drugbank_info.cas_number";
                Description: "prd.drugbank.drugbank_info.description";
                DrugCategories: "prd.drugbank.drugbank_info.drug_categories";
                DrugGroups: "prd.drugbank.drugbank_info.drug_groups";
                DrugProducts: {
                    Approved: "prd.drugbank.drugbank_info.drug_products.approved";
                    Country: "prd.drugbank.drugbank_info.drug_products.country";
                    EndedMarketingOn: "prd.drugbank.drugbank_info.drug_products.ended_marketing_on";
                    Name: "prd.drugbank.drugbank_info.drug_products.name";
                    Source: "prd.drugbank.drugbank_info.drug_products.source";
                    StartedMarketingOn: "prd.drugbank.drugbank_info.drug_products.started_marketing_on";
                };
                DrugbankId: "prd.drugbank.drugbank_info.drugbank_id";
                Indication: "prd.drugbank.drugbank_info.indication";
                MechanismOfAction: "prd.drugbank.drugbank_info.mechanism_of_action";
                Name: "prd.drugbank.drugbank_info.name";
                Pharmacology: "prd.drugbank.drugbank_info.pharmacology";
                Synonyms: "prd.drugbank.drugbank_info.synonyms";
            };
            DrugbankTarget: {
                InteractionType: "prd.drugbank.drugbank_target.interaction_type";
                Name: "prd.drugbank.drugbank_target.name";
                Ordinal: "prd.drugbank.drugbank_target.ordinal";
                OrganismCommonName: "prd.drugbank.drugbank_target.organism_common_name";
                ReferenceDatabaseAccessionCode: "prd.drugbank.drugbank_target.reference_database_accession_code";
                ReferenceDatabaseName: "prd.drugbank.drugbank_target.reference_database_name";
                SeqOneLetterCode: "prd.drugbank.drugbank_target.seq_one_letter_code";
                TargetActions: "prd.drugbank.drugbank_target.target_actions";
            };
        };
        PdbxChemCompAudit: {
            ActionType: "prd.pdbx_chem_comp_audit.action_type";
            CompId: "prd.pdbx_chem_comp_audit.comp_id";
            Date: "prd.pdbx_chem_comp_audit.date";
            Details: "prd.pdbx_chem_comp_audit.details";
            Ordinal: "prd.pdbx_chem_comp_audit.ordinal";
        };
        PdbxChemCompDescriptor: {
            CompId: "prd.pdbx_chem_comp_descriptor.comp_id";
            Descriptor: "prd.pdbx_chem_comp_descriptor.descriptor";
            Program: "prd.pdbx_chem_comp_descriptor.program";
            ProgramVersion: "prd.pdbx_chem_comp_descriptor.program_version";
            Type: "prd.pdbx_chem_comp_descriptor.type";
        };
        PdbxChemCompFeature: {
            CompId: "prd.pdbx_chem_comp_feature.comp_id";
            Source: "prd.pdbx_chem_comp_feature.source";
            Type: "prd.pdbx_chem_comp_feature.type";
            Value: "prd.pdbx_chem_comp_feature.value";
        };
        PdbxChemCompIdentifier: {
            CompId: "prd.pdbx_chem_comp_identifier.comp_id";
            Identifier: "prd.pdbx_chem_comp_identifier.identifier";
            Program: "prd.pdbx_chem_comp_identifier.program";
            ProgramVersion: "prd.pdbx_chem_comp_identifier.program_version";
            Type: "prd.pdbx_chem_comp_identifier.type";
        };
        PdbxFamilyPrdAudit: {
            ActionType: "prd.pdbx_family_prd_audit.action_type";
            Annotator: "prd.pdbx_family_prd_audit.annotator";
            Date: "prd.pdbx_family_prd_audit.date";
            Details: "prd.pdbx_family_prd_audit.details";
            FamilyPrdId: "prd.pdbx_family_prd_audit.family_prd_id";
            ProcessingSite: "prd.pdbx_family_prd_audit.processing_site";
        };
        PdbxPrdAudit: {
            ActionType: "prd.pdbx_prd_audit.action_type";
            Annotator: "prd.pdbx_prd_audit.annotator";
            Date: "prd.pdbx_prd_audit.date";
            Details: "prd.pdbx_prd_audit.details";
            PrdId: "prd.pdbx_prd_audit.prd_id";
            ProcessingSite: "prd.pdbx_prd_audit.processing_site";
        };
        PdbxReferenceEntityList: {
            ComponentId: "prd.pdbx_reference_entity_list.component_id";
            Details: "prd.pdbx_reference_entity_list.details";
            PrdId: "prd.pdbx_reference_entity_list.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_list.ref_entity_id";
            Type: "prd.pdbx_reference_entity_list.type";
        };
        PdbxReferenceEntityPoly: {
            DbCode: "prd.pdbx_reference_entity_poly.db_code";
            DbName: "prd.pdbx_reference_entity_poly.db_name";
            PrdId: "prd.pdbx_reference_entity_poly.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly.ref_entity_id";
            Type: "prd.pdbx_reference_entity_poly.type";
        };
        PdbxReferenceEntityPolyLink: {
            AtomId1: "prd.pdbx_reference_entity_poly_link.atom_id_1";
            AtomId2: "prd.pdbx_reference_entity_poly_link.atom_id_2";
            CompId1: "prd.pdbx_reference_entity_poly_link.comp_id_1";
            CompId2: "prd.pdbx_reference_entity_poly_link.comp_id_2";
            ComponentId: "prd.pdbx_reference_entity_poly_link.component_id";
            EntitySeqNum1: "prd.pdbx_reference_entity_poly_link.entity_seq_num_1";
            EntitySeqNum2: "prd.pdbx_reference_entity_poly_link.entity_seq_num_2";
            LinkId: "prd.pdbx_reference_entity_poly_link.link_id";
            PrdId: "prd.pdbx_reference_entity_poly_link.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_link.ref_entity_id";
            ValueOrder: "prd.pdbx_reference_entity_poly_link.value_order";
        };
        PdbxReferenceEntityPolySeq: {
            Hetero: "prd.pdbx_reference_entity_poly_seq.hetero";
            MonId: "prd.pdbx_reference_entity_poly_seq.mon_id";
            Num: "prd.pdbx_reference_entity_poly_seq.num";
            Observed: "prd.pdbx_reference_entity_poly_seq.observed";
            ParentMonId: "prd.pdbx_reference_entity_poly_seq.parent_mon_id";
            PrdId: "prd.pdbx_reference_entity_poly_seq.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_poly_seq.ref_entity_id";
        };
        PdbxReferenceEntitySequence: {
            NrpFlag: "prd.pdbx_reference_entity_sequence.NRP_flag";
            OneLetterCodes: "prd.pdbx_reference_entity_sequence.one_letter_codes";
            PrdId: "prd.pdbx_reference_entity_sequence.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_sequence.ref_entity_id";
            Type: "prd.pdbx_reference_entity_sequence.type";
        };
        PdbxReferenceEntitySrcNat: {
            Atcc: "prd.pdbx_reference_entity_src_nat.atcc";
            DbCode: "prd.pdbx_reference_entity_src_nat.db_code";
            DbName: "prd.pdbx_reference_entity_src_nat.db_name";
            Ordinal: "prd.pdbx_reference_entity_src_nat.ordinal";
            OrganismScientific: "prd.pdbx_reference_entity_src_nat.organism_scientific";
            PrdId: "prd.pdbx_reference_entity_src_nat.prd_id";
            RefEntityId: "prd.pdbx_reference_entity_src_nat.ref_entity_id";
            Source: "prd.pdbx_reference_entity_src_nat.source";
            SourceId: "prd.pdbx_reference_entity_src_nat.source_id";
            Taxid: "prd.pdbx_reference_entity_src_nat.taxid";
        };
        PdbxReferenceMolecule: {
            ChemCompId: "prd.pdbx_reference_molecule.chem_comp_id";
            Class: "prd.pdbx_reference_molecule.class";
            ClassEvidenceCode: "prd.pdbx_reference_molecule.class_evidence_code";
            CompoundDetails: "prd.pdbx_reference_molecule.compound_details";
            Description: "prd.pdbx_reference_molecule.description";
            Formula: "prd.pdbx_reference_molecule.formula";
            FormulaWeight: "prd.pdbx_reference_molecule.formula_weight";
            Name: "prd.pdbx_reference_molecule.name";
            PrdId: "prd.pdbx_reference_molecule.prd_id";
            ReleaseStatus: "prd.pdbx_reference_molecule.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule.replaced_by";
            Replaces: "prd.pdbx_reference_molecule.replaces";
            RepresentAs: "prd.pdbx_reference_molecule.represent_as";
            RepresentativePdbIdCode: "prd.pdbx_reference_molecule.representative_PDB_id_code";
            Type: "prd.pdbx_reference_molecule.type";
            TypeEvidenceCode: "prd.pdbx_reference_molecule.type_evidence_code";
        };
        PdbxReferenceMoleculeAnnotation: {
            FamilyPrdId: "prd.pdbx_reference_molecule_annotation.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_annotation.ordinal";
            PrdId: "prd.pdbx_reference_molecule_annotation.prd_id";
            Source: "prd.pdbx_reference_molecule_annotation.source";
            Text: "prd.pdbx_reference_molecule_annotation.text";
            Type: "prd.pdbx_reference_molecule_annotation.type";
        };
        PdbxReferenceMoleculeDetails: {
            FamilyPrdId: "prd.pdbx_reference_molecule_details.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_details.ordinal";
            Source: "prd.pdbx_reference_molecule_details.source";
            SourceId: "prd.pdbx_reference_molecule_details.source_id";
            Text: "prd.pdbx_reference_molecule_details.text";
        };
        PdbxReferenceMoleculeFamily: {
            FamilyPrdId: "prd.pdbx_reference_molecule_family.family_prd_id";
            Name: "prd.pdbx_reference_molecule_family.name";
            ReleaseStatus: "prd.pdbx_reference_molecule_family.release_status";
            ReplacedBy: "prd.pdbx_reference_molecule_family.replaced_by";
            Replaces: "prd.pdbx_reference_molecule_family.replaces";
        };
        PdbxReferenceMoleculeFeatures: {
            FamilyPrdId: "prd.pdbx_reference_molecule_features.family_prd_id";
            Ordinal: "prd.pdbx_reference_molecule_features.ordinal";
            PrdId: "prd.pdbx_reference_molecule_features.prd_id";
            Source: "prd.pdbx_reference_molecule_features.source";
            SourceOrdinal: "prd.pdbx_reference_molecule_features.source_ordinal";
            Type: "prd.pdbx_reference_molecule_features.type";
            Value: "prd.pdbx_reference_molecule_features.value";
        };
        PdbxReferenceMoleculeList: {
            FamilyPrdId: "prd.pdbx_reference_molecule_list.family_prd_id";
            PrdId: "prd.pdbx_reference_molecule_list.prd_id";
        };
        PdbxReferenceMoleculeRelatedStructures: {
            CitationId: "prd.pdbx_reference_molecule_related_structures.citation_id";
            DbAccession: "prd.pdbx_reference_molecule_related_structures.db_accession";
            DbCode: "prd.pdbx_reference_molecule_related_structures.db_code";
            DbName: "prd.pdbx_reference_molecule_related_structures.db_name";
            FamilyPrdId: "prd.pdbx_reference_molecule_related_structures.family_prd_id";
            Formula: "prd.pdbx_reference_molecule_related_structures.formula";
            Name: "prd.pdbx_reference_molecule_related_structures.name";
            Ordinal: "prd.pdbx_reference_molecule_related_structures.ordinal";
        };
        PdbxReferenceMoleculeSynonyms: {
            FamilyPrdId: "prd.pdbx_reference_molecule_synonyms.family_prd_id";
            Name: "prd.pdbx_reference_molecule_synonyms.name";
            Ordinal: "prd.pdbx_reference_molecule_synonyms.ordinal";
            PrdId: "prd.pdbx_reference_molecule_synonyms.prd_id";
            Source: "prd.pdbx_reference_molecule_synonyms.source";
        };
        RcsbBirdCitation: {
            Id: "prd.rcsb_bird_citation.id";
            JournalAbbrev: "prd.rcsb_bird_citation.journal_abbrev";
            JournalVolume: "prd.rcsb_bird_citation.journal_volume";
            PageFirst: "prd.rcsb_bird_citation.page_first";
            PageLast: "prd.rcsb_bird_citation.page_last";
            PdbxDatabaseIdDoi: "prd.rcsb_bird_citation.pdbx_database_id_DOI";
            PdbxDatabaseIdPubMed: "prd.rcsb_bird_citation.pdbx_database_id_PubMed";
            RcsbAuthors: "prd.rcsb_bird_citation.rcsb_authors";
            Title: "prd.rcsb_bird_citation.title";
            Year: "prd.rcsb_bird_citation.year";
        };
        RcsbChemCompAnnotation: {
            AnnotationId: "prd.rcsb_chem_comp_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "prd.rcsb_chem_comp_annotation.annotation_lineage.depth";
                Id: "prd.rcsb_chem_comp_annotation.annotation_lineage.id";
                Name: "prd.rcsb_chem_comp_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "prd.rcsb_chem_comp_annotation.assignment_version";
            Description: "prd.rcsb_chem_comp_annotation.description";
            Name: "prd.rcsb_chem_comp_annotation.name";
            ProvenanceSource: "prd.rcsb_chem_comp_annotation.provenance_source";
            Type: "prd.rcsb_chem_comp_annotation.type";
        };
        RcsbChemCompContainerIdentifiers: {
            AtcCodes: "prd.rcsb_chem_comp_container_identifiers.atc_codes";
            CompId: "prd.rcsb_chem_comp_container_identifiers.comp_id";
            DrugbankId: "prd.rcsb_chem_comp_container_identifiers.drugbank_id";
            PrdId: "prd.rcsb_chem_comp_container_identifiers.prd_id";
            RcsbId: "prd.rcsb_chem_comp_container_identifiers.rcsb_id";
            SubcomponentIds: "prd.rcsb_chem_comp_container_identifiers.subcomponent_ids";
        };
        RcsbChemCompDescriptor: {
            InChI: "prd.rcsb_chem_comp_descriptor.InChI";
            InChIKey: "prd.rcsb_chem_comp_descriptor.InChIKey";
            Smiles: "prd.rcsb_chem_comp_descriptor.SMILES";
            SmilesStereo: "prd.rcsb_chem_comp_descriptor.SMILES_stereo";
            CompId: "prd.rcsb_chem_comp_descriptor.comp_id";
        };
        RcsbChemCompInfo: {
            AtomCount: "prd.rcsb_chem_comp_info.atom_count";
            AtomCountChiral: "prd.rcsb_chem_comp_info.atom_count_chiral";
            AtomCountHeavy: "prd.rcsb_chem_comp_info.atom_count_heavy";
            BondCount: "prd.rcsb_chem_comp_info.bond_count";
            BondCountAromatic: "prd.rcsb_chem_comp_info.bond_count_aromatic";
            CompId: "prd.rcsb_chem_comp_info.comp_id";
            InitialDepositionDate: "prd.rcsb_chem_comp_info.initial_deposition_date";
            InitialReleaseDate: "prd.rcsb_chem_comp_info.initial_release_date";
            ReleaseStatus: "prd.rcsb_chem_comp_info.release_status";
            RevisionDate: "prd.rcsb_chem_comp_info.revision_date";
        };
        RcsbChemCompRelated: {
            CompId: "prd.rcsb_chem_comp_related.comp_id";
            Ordinal: "prd.rcsb_chem_comp_related.ordinal";
            RelatedMappingMethod: "prd.rcsb_chem_comp_related.related_mapping_method";
            ResourceAccessionCode: "prd.rcsb_chem_comp_related.resource_accession_code";
            ResourceName: "prd.rcsb_chem_comp_related.resource_name";
        };
        RcsbChemCompSynonyms: {
            CompId: "prd.rcsb_chem_comp_synonyms.comp_id";
            Name: "prd.rcsb_chem_comp_synonyms.name";
            Ordinal: "prd.rcsb_chem_comp_synonyms.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_synonyms.provenance_source";
            Type: "prd.rcsb_chem_comp_synonyms.type";
        };
        RcsbChemCompTarget: {
            CompId: "prd.rcsb_chem_comp_target.comp_id";
            InteractionType: "prd.rcsb_chem_comp_target.interaction_type";
            Name: "prd.rcsb_chem_comp_target.name";
            Ordinal: "prd.rcsb_chem_comp_target.ordinal";
            ProvenanceSource: "prd.rcsb_chem_comp_target.provenance_source";
            ReferenceDatabaseAccessionCode: "prd.rcsb_chem_comp_target.reference_database_accession_code";
            ReferenceDatabaseName: "prd.rcsb_chem_comp_target.reference_database_name";
            TargetActions: "prd.rcsb_chem_comp_target.target_actions";
        };
        RcsbId: "prd.rcsb_id";
        RcsbSchemaContainerIdentifiers: {
            CollectionName: "prd.rcsb_schema_container_identifiers.collection_name";
            CollectionSchemaVersion: "prd.rcsb_schema_container_identifiers.collection_schema_version";
            SchemaName: "prd.rcsb_schema_container_identifiers.schema_name";
        };
    };
    static readonly RcsbClusterFlexibility: {
        AvgRmsd: "rcsb_cluster_flexibility.avg_rmsd";
        Label: "rcsb_cluster_flexibility.label";
        Link: "rcsb_cluster_flexibility.link";
        MaxRmsd: "rcsb_cluster_flexibility.max_rmsd";
        ProvenanceCode: "rcsb_cluster_flexibility.provenance_code";
    };
    static readonly RcsbClusterMembership: {
        ClusterId: "rcsb_cluster_membership.cluster_id";
        Identity: "rcsb_cluster_membership.identity";
    };
    static readonly RcsbEntityHostOrganism: {
        BegSeqNum: "rcsb_entity_host_organism.beg_seq_num";
        CommonName: "rcsb_entity_host_organism.common_name";
        EndSeqNum: "rcsb_entity_host_organism.end_seq_num";
        NcbiCommonNames: "rcsb_entity_host_organism.ncbi_common_names";
        NcbiParentScientificName: "rcsb_entity_host_organism.ncbi_parent_scientific_name";
        NcbiScientificName: "rcsb_entity_host_organism.ncbi_scientific_name";
        NcbiTaxonomyId: "rcsb_entity_host_organism.ncbi_taxonomy_id";
        PdbxSrcId: "rcsb_entity_host_organism.pdbx_src_id";
        ProvenanceSource: "rcsb_entity_host_organism.provenance_source";
        ScientificName: "rcsb_entity_host_organism.scientific_name";
        TaxonomyLineage: {
            Depth: "rcsb_entity_host_organism.taxonomy_lineage.depth";
            Id: "rcsb_entity_host_organism.taxonomy_lineage.id";
            Name: "rcsb_entity_host_organism.taxonomy_lineage.name";
        };
    };
    static readonly RcsbEntitySourceOrganism: {
        BegSeqNum: "rcsb_entity_source_organism.beg_seq_num";
        CommonName: "rcsb_entity_source_organism.common_name";
        EndSeqNum: "rcsb_entity_source_organism.end_seq_num";
        NcbiCommonNames: "rcsb_entity_source_organism.ncbi_common_names";
        NcbiParentScientificName: "rcsb_entity_source_organism.ncbi_parent_scientific_name";
        NcbiScientificName: "rcsb_entity_source_organism.ncbi_scientific_name";
        NcbiTaxonomyId: "rcsb_entity_source_organism.ncbi_taxonomy_id";
        PdbxSrcId: "rcsb_entity_source_organism.pdbx_src_id";
        ProvenanceSource: "rcsb_entity_source_organism.provenance_source";
        RcsbGeneName: {
            ProvenanceSource: "rcsb_entity_source_organism.rcsb_gene_name.provenance_source";
            Value: "rcsb_entity_source_organism.rcsb_gene_name.value";
        };
        ScientificName: "rcsb_entity_source_organism.scientific_name";
        SourceType: "rcsb_entity_source_organism.source_type";
        TaxonomyLineage: {
            Depth: "rcsb_entity_source_organism.taxonomy_lineage.depth";
            Id: "rcsb_entity_source_organism.taxonomy_lineage.id";
            Name: "rcsb_entity_source_organism.taxonomy_lineage.name";
        };
    };
    static readonly RcsbGenomicLineage: {
        Depth: "rcsb_genomic_lineage.depth";
        Id: "rcsb_genomic_lineage.id";
        Name: "rcsb_genomic_lineage.name";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbMembraneLineage: {
        Depth: "rcsb_membrane_lineage.depth";
        Id: "rcsb_membrane_lineage.id";
        Name: "rcsb_membrane_lineage.name";
    };
    static readonly RcsbMembraneLineageProvenanceCode: "rcsb_membrane_lineage_provenance_code";
    static readonly RcsbPolymerEntity: {
        Details: "rcsb_polymer_entity.details";
        FormulaWeight: "rcsb_polymer_entity.formula_weight";
        PdbxDescription: "rcsb_polymer_entity.pdbx_description";
        PdbxEc: "rcsb_polymer_entity.pdbx_ec";
        PdbxFragment: "rcsb_polymer_entity.pdbx_fragment";
        PdbxMutation: "rcsb_polymer_entity.pdbx_mutation";
        PdbxNumberOfMolecules: "rcsb_polymer_entity.pdbx_number_of_molecules";
        RcsbEcLineage: {
            Depth: "rcsb_polymer_entity.rcsb_ec_lineage.depth";
            Id: "rcsb_polymer_entity.rcsb_ec_lineage.id";
            Name: "rcsb_polymer_entity.rcsb_ec_lineage.name";
        };
        RcsbEnzymeClassCombined: {
            Depth: "rcsb_polymer_entity.rcsb_enzyme_class_combined.depth";
            Ec: "rcsb_polymer_entity.rcsb_enzyme_class_combined.ec";
            ProvenanceSource: "rcsb_polymer_entity.rcsb_enzyme_class_combined.provenance_source";
        };
        RcsbMacromolecularNamesCombined: {
            Name: "rcsb_polymer_entity.rcsb_macromolecular_names_combined.name";
            ProvenanceCode: "rcsb_polymer_entity.rcsb_macromolecular_names_combined.provenance_code";
            ProvenanceSource: "rcsb_polymer_entity.rcsb_macromolecular_names_combined.provenance_source";
        };
        RcsbMultipleSourceFlag: "rcsb_polymer_entity.rcsb_multiple_source_flag";
        RcsbPolymerNameCombined: {
            Names: "rcsb_polymer_entity.rcsb_polymer_name_combined.names";
            ProvenanceSource: "rcsb_polymer_entity.rcsb_polymer_name_combined.provenance_source";
        };
        RcsbSourcePartCount: "rcsb_polymer_entity.rcsb_source_part_count";
        RcsbSourceTaxonomyCount: "rcsb_polymer_entity.rcsb_source_taxonomy_count";
        SrcMethod: "rcsb_polymer_entity.src_method";
    };
    static readonly RcsbPolymerEntityAlign: {
        AlignedRegions: {
            EntityBegSeqId: "rcsb_polymer_entity_align.aligned_regions.entity_beg_seq_id";
            Length: "rcsb_polymer_entity_align.aligned_regions.length";
            RefBegSeqId: "rcsb_polymer_entity_align.aligned_regions.ref_beg_seq_id";
        };
        ProvenanceSource: "rcsb_polymer_entity_align.provenance_source";
        ReferenceDatabaseAccession: "rcsb_polymer_entity_align.reference_database_accession";
        ReferenceDatabaseIsoform: "rcsb_polymer_entity_align.reference_database_isoform";
        ReferenceDatabaseName: "rcsb_polymer_entity_align.reference_database_name";
    };
    static readonly RcsbPolymerEntityAnnotation: {
        AdditionalProperties: {
            Name: "rcsb_polymer_entity_annotation.additional_properties.name";
            Values: "rcsb_polymer_entity_annotation.additional_properties.values";
        };
        AnnotationId: "rcsb_polymer_entity_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_polymer_entity_annotation.annotation_lineage.depth";
            Id: "rcsb_polymer_entity_annotation.annotation_lineage.id";
            Name: "rcsb_polymer_entity_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_polymer_entity_annotation.assignment_version";
        Description: "rcsb_polymer_entity_annotation.description";
        Name: "rcsb_polymer_entity_annotation.name";
        ProvenanceSource: "rcsb_polymer_entity_annotation.provenance_source";
        Type: "rcsb_polymer_entity_annotation.type";
    };
    static readonly RcsbPolymerEntityContainerIdentifiers: {
        AsymIds: "rcsb_polymer_entity_container_identifiers.asym_ids";
        AuthAsymIds: "rcsb_polymer_entity_container_identifiers.auth_asym_ids";
        ChemCompMonomers: "rcsb_polymer_entity_container_identifiers.chem_comp_monomers";
        ChemCompNstdMonomers: "rcsb_polymer_entity_container_identifiers.chem_comp_nstd_monomers";
        ChemRefDefId: "rcsb_polymer_entity_container_identifiers.chem_ref_def_id";
        EntityId: "rcsb_polymer_entity_container_identifiers.entity_id";
        EntryId: "rcsb_polymer_entity_container_identifiers.entry_id";
        PrdId: "rcsb_polymer_entity_container_identifiers.prd_id";
        RcsbId: "rcsb_polymer_entity_container_identifiers.rcsb_id";
        ReferenceSequenceIdentifiers: {
            DatabaseAccession: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
            DatabaseIsoform: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_isoform";
            DatabaseName: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name";
            EntitySequenceCoverage: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.entity_sequence_coverage";
            ProvenanceSource: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.provenance_source";
            ReferenceSequenceCoverage: "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.reference_sequence_coverage";
        };
        UniprotIds: "rcsb_polymer_entity_container_identifiers.uniprot_ids";
    };
    static readonly RcsbPolymerEntityFeature: {
        AdditionalProperties: {
            Name: "rcsb_polymer_entity_feature.additional_properties.name";
            Values: "rcsb_polymer_entity_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_polymer_entity_feature.assignment_version";
        Description: "rcsb_polymer_entity_feature.description";
        FeatureId: "rcsb_polymer_entity_feature.feature_id";
        FeaturePositions: {
            BegCompId: "rcsb_polymer_entity_feature.feature_positions.beg_comp_id";
            BegSeqId: "rcsb_polymer_entity_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_polymer_entity_feature.feature_positions.end_seq_id";
            Value: "rcsb_polymer_entity_feature.feature_positions.value";
            Values: "rcsb_polymer_entity_feature.feature_positions.values";
        };
        Name: "rcsb_polymer_entity_feature.name";
        ProvenanceSource: "rcsb_polymer_entity_feature.provenance_source";
        ReferenceScheme: "rcsb_polymer_entity_feature.reference_scheme";
        Type: "rcsb_polymer_entity_feature.type";
    };
    static readonly RcsbPolymerEntityFeatureSummary: {
        Count: "rcsb_polymer_entity_feature_summary.count";
        Coverage: "rcsb_polymer_entity_feature_summary.coverage";
        MaximumLength: "rcsb_polymer_entity_feature_summary.maximum_length";
        MaximumValue: "rcsb_polymer_entity_feature_summary.maximum_value";
        MinimumLength: "rcsb_polymer_entity_feature_summary.minimum_length";
        MinimumValue: "rcsb_polymer_entity_feature_summary.minimum_value";
        Type: "rcsb_polymer_entity_feature_summary.type";
    };
    static readonly RcsbPolymerEntityGroupMembership: {
        AggregationMethod: "rcsb_polymer_entity_group_membership.aggregation_method";
        AlignedRegions: {
            EntityBegSeqId: "rcsb_polymer_entity_group_membership.aligned_regions.entity_beg_seq_id";
            Length: "rcsb_polymer_entity_group_membership.aligned_regions.length";
            RefBegSeqId: "rcsb_polymer_entity_group_membership.aligned_regions.ref_beg_seq_id";
        };
        GroupId: "rcsb_polymer_entity_group_membership.group_id";
        SimilarityCutoff: "rcsb_polymer_entity_group_membership.similarity_cutoff";
    };
    static readonly RcsbPolymerEntityKeywords: {
        Text: "rcsb_polymer_entity_keywords.text";
    };
    static readonly RcsbPolymerEntityNameCom: {
        Name: "rcsb_polymer_entity_name_com.name";
    };
    static readonly RcsbPolymerEntityNameSys: {
        Name: "rcsb_polymer_entity_name_sys.name";
        System: "rcsb_polymer_entity_name_sys.system";
    };
    static readonly RcsbRelatedTargetReferences: {
        AlignedTarget: {
            EntityBegSeqId: "rcsb_related_target_references.aligned_target.entity_beg_seq_id";
            Length: "rcsb_related_target_references.aligned_target.length";
            TargetBegSeqId: "rcsb_related_target_references.aligned_target.target_beg_seq_id";
        };
        RelatedResourceName: "rcsb_related_target_references.related_resource_name";
        RelatedResourceVersion: "rcsb_related_target_references.related_resource_version";
        RelatedTargetId: "rcsb_related_target_references.related_target_id";
        TargetTaxonomyId: "rcsb_related_target_references.target_taxonomy_id";
    };
    static readonly RcsbTargetCofactors: {
        BindingAssayValue: "rcsb_target_cofactors.binding_assay_value";
        BindingAssayValueType: "rcsb_target_cofactors.binding_assay_value_type";
        CofactorInChIKey: "rcsb_target_cofactors.cofactor_InChIKey";
        CofactorSmiles: "rcsb_target_cofactors.cofactor_SMILES";
        CofactorChemCompId: "rcsb_target_cofactors.cofactor_chem_comp_id";
        CofactorDescription: "rcsb_target_cofactors.cofactor_description";
        CofactorName: "rcsb_target_cofactors.cofactor_name";
        CofactorPrdId: "rcsb_target_cofactors.cofactor_prd_id";
        CofactorResourceId: "rcsb_target_cofactors.cofactor_resource_id";
        MechanismOfAction: "rcsb_target_cofactors.mechanism_of_action";
        NeighborFlag: "rcsb_target_cofactors.neighbor_flag";
        PatentNos: "rcsb_target_cofactors.patent_nos";
        PubmedIds: "rcsb_target_cofactors.pubmed_ids";
        ResourceName: "rcsb_target_cofactors.resource_name";
        ResourceVersion: "rcsb_target_cofactors.resource_version";
        TargetResourceId: "rcsb_target_cofactors.target_resource_id";
    };
    static readonly Uniprots: {
        RcsbId: "uniprots.rcsb_id";
        RcsbUniprotAccession: "uniprots.rcsb_uniprot_accession";
        RcsbUniprotAlignments: {
            CoreEntityAlignments: {
                AlignedRegions: {
                    Length: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.length";
                    QueryBegin: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.query_begin";
                    TargetBegin: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.target_begin";
                };
                CoreEntityIdentifiers: {
                    EntityId: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.core_entity_identifiers.entity_id";
                    EntryId: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.core_entity_identifiers.entry_id";
                };
                Scores: {
                    QueryCoverage: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.scores.query_coverage";
                    QueryLength: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.scores.query_length";
                    TargetCoverage: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.scores.target_coverage";
                    TargetLength: "uniprots.rcsb_uniprot_alignments.core_entity_alignments.scores.target_length";
                };
            };
        };
        RcsbUniprotAnnotation: {
            AdditionalProperties: {
                Name: "uniprots.rcsb_uniprot_annotation.additional_properties.name";
                Values: "uniprots.rcsb_uniprot_annotation.additional_properties.values";
            };
            AnnotationId: "uniprots.rcsb_uniprot_annotation.annotation_id";
            AnnotationLineage: {
                Depth: "uniprots.rcsb_uniprot_annotation.annotation_lineage.depth";
                Id: "uniprots.rcsb_uniprot_annotation.annotation_lineage.id";
                Name: "uniprots.rcsb_uniprot_annotation.annotation_lineage.name";
            };
            AssignmentVersion: "uniprots.rcsb_uniprot_annotation.assignment_version";
            Description: "uniprots.rcsb_uniprot_annotation.description";
            Name: "uniprots.rcsb_uniprot_annotation.name";
            ProvenanceSource: "uniprots.rcsb_uniprot_annotation.provenance_source";
            Type: "uniprots.rcsb_uniprot_annotation.type";
        };
        RcsbUniprotContainerIdentifiers: {
            ReferenceSequenceIdentifiers: {
                DatabaseAccession: "uniprots.rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_accession";
                DatabaseIsoform: "uniprots.rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_isoform";
                DatabaseName: "uniprots.rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_name";
                ProvenanceSource: "uniprots.rcsb_uniprot_container_identifiers.reference_sequence_identifiers.provenance_source";
            };
            UniprotId: "uniprots.rcsb_uniprot_container_identifiers.uniprot_id";
        };
        RcsbUniprotEntryName: "uniprots.rcsb_uniprot_entry_name";
        RcsbUniprotExternalReference: {
            ProvenanceSource: "uniprots.rcsb_uniprot_external_reference.provenance_source";
            ReferenceId: "uniprots.rcsb_uniprot_external_reference.reference_id";
            ReferenceName: "uniprots.rcsb_uniprot_external_reference.reference_name";
        };
        RcsbUniprotFeature: {
            AssignmentVersion: "uniprots.rcsb_uniprot_feature.assignment_version";
            Description: "uniprots.rcsb_uniprot_feature.description";
            FeatureId: "uniprots.rcsb_uniprot_feature.feature_id";
            FeaturePositions: {
                BegCompId: "uniprots.rcsb_uniprot_feature.feature_positions.beg_comp_id";
                BegSeqId: "uniprots.rcsb_uniprot_feature.feature_positions.beg_seq_id";
                EndSeqId: "uniprots.rcsb_uniprot_feature.feature_positions.end_seq_id";
                Value: "uniprots.rcsb_uniprot_feature.feature_positions.value";
                Values: "uniprots.rcsb_uniprot_feature.feature_positions.values";
            };
            Name: "uniprots.rcsb_uniprot_feature.name";
            ProvenanceSource: "uniprots.rcsb_uniprot_feature.provenance_source";
            ReferenceScheme: "uniprots.rcsb_uniprot_feature.reference_scheme";
            Type: "uniprots.rcsb_uniprot_feature.type";
        };
        RcsbUniprotKeyword: {
            Id: "uniprots.rcsb_uniprot_keyword.id";
            Value: "uniprots.rcsb_uniprot_keyword.value";
        };
        RcsbUniprotProtein: {
            Ec: {
                Number: "uniprots.rcsb_uniprot_protein.ec.number";
                ProvenanceCode: "uniprots.rcsb_uniprot_protein.ec.provenance_code";
            };
            Function: {
                Details: "uniprots.rcsb_uniprot_protein.function.details";
                ProvenanceCode: "uniprots.rcsb_uniprot_protein.function.provenance_code";
            };
            Gene: {
                Name: {
                    Type: "uniprots.rcsb_uniprot_protein.gene.name.type";
                    Value: "uniprots.rcsb_uniprot_protein.gene.name.value";
                };
            };
            Name: {
                ProvenanceCode: "uniprots.rcsb_uniprot_protein.name.provenance_code";
                Value: "uniprots.rcsb_uniprot_protein.name.value";
            };
            Sequence: "uniprots.rcsb_uniprot_protein.sequence";
            SourceOrganism: {
                ProvenanceCode: "uniprots.rcsb_uniprot_protein.source_organism.provenance_code";
                ScientificName: "uniprots.rcsb_uniprot_protein.source_organism.scientific_name";
                TaxonomyId: "uniprots.rcsb_uniprot_protein.source_organism.taxonomy_id";
            };
        };
    };
}
export declare class GroupPolymerEntity {
    static readonly RcsbGroupAccessionInfo: {
        Version: "rcsb_group_accession_info.version";
    };
    static readonly RcsbGroupContainerIdentifiers: {
        GroupId: "rcsb_group_container_identifiers.group_id";
        GroupMemberIds: "rcsb_group_container_identifiers.group_member_ids";
        GroupProvenanceId: "rcsb_group_container_identifiers.group_provenance_id";
        ParentMemberIds: "rcsb_group_container_identifiers.parent_member_ids";
    };
    static readonly RcsbGroupInfo: {
        GroupDescription: "rcsb_group_info.group_description";
        GroupMembersCount: "rcsb_group_info.group_members_count";
        GroupMembersGranularity: "rcsb_group_info.group_members_granularity";
        GroupName: "rcsb_group_info.group_name";
    };
    static readonly RcsbGroupRelated: {
        ResourceAccessionCode: "rcsb_group_related.resource_accession_code";
        ResourceName: "rcsb_group_related.resource_name";
    };
    static readonly RcsbGroupStatistics: {
        SimilarityCutoff: "rcsb_group_statistics.similarity_cutoff";
        SimilarityScoreMax: "rcsb_group_statistics.similarity_score_max";
        SimilarityScoreMin: "rcsb_group_statistics.similarity_score_min";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbPolymerEntityGroupMembersRankings: {
        GroupMembers: {
            MemberId: "rcsb_polymer_entity_group_members_rankings.group_members.member_id";
            OriginalScore: "rcsb_polymer_entity_group_members_rankings.group_members.original_score";
            Rank: "rcsb_polymer_entity_group_members_rankings.group_members.rank";
        };
        RankingCriteriaType: "rcsb_polymer_entity_group_members_rankings.ranking_criteria_type";
    };
    static readonly RcsbPolymerEntityGroupSequenceAlignment: {
        AbstractReference: {
            Length: "rcsb_polymer_entity_group_sequence_alignment.abstract_reference.length";
            Sequence: "rcsb_polymer_entity_group_sequence_alignment.abstract_reference.sequence";
        };
        GroupMembersAlignment: {
            AlignedRegions: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.aligned_regions";
            MemberId: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.member_id";
            Scores: {
                QueryCoverage: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.scores.query_coverage";
                QueryLength: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.scores.query_length";
                TargetCoverage: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.scores.target_coverage";
                TargetLength: "rcsb_polymer_entity_group_sequence_alignment.group_members_alignment.scores.target_length";
            };
        };
    };
}
export declare class CorePolymerEntityInstance {
    static readonly PdbxStructSpecialSymmetry: {
        PdbModelNum: "pdbx_struct_special_symmetry.PDB_model_num";
        AuthSeqId: "pdbx_struct_special_symmetry.auth_seq_id";
        Id: "pdbx_struct_special_symmetry.id";
        LabelAsymId: "pdbx_struct_special_symmetry.label_asym_id";
        LabelCompId: "pdbx_struct_special_symmetry.label_comp_id";
    };
    static readonly PdbxVrptSummaryEntityFitToMap: {
        PdbModelNum: "pdbx_vrpt_summary_entity_fit_to_map.PDB_model_num";
        QScore: "pdbx_vrpt_summary_entity_fit_to_map.Q_score";
        AverageResidueInclusion: "pdbx_vrpt_summary_entity_fit_to_map.average_residue_inclusion";
    };
    static readonly PdbxVrptSummaryEntityGeometry: {
        PdbModelNum: "pdbx_vrpt_summary_entity_geometry.PDB_model_num";
        AnglesRmsz: "pdbx_vrpt_summary_entity_geometry.angles_RMSZ";
        AverageResidueInclusion: "pdbx_vrpt_summary_entity_geometry.average_residue_inclusion";
        BondsRmsz: "pdbx_vrpt_summary_entity_geometry.bonds_RMSZ";
        NumAnglesRmsz: "pdbx_vrpt_summary_entity_geometry.num_angles_RMSZ";
        NumBondsRmsz: "pdbx_vrpt_summary_entity_geometry.num_bonds_RMSZ";
    };
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbLatestRevision: {
        MajorRevision: "rcsb_latest_revision.major_revision";
        MinorRevision: "rcsb_latest_revision.minor_revision";
        RevisionDate: "rcsb_latest_revision.revision_date";
    };
    static readonly RcsbLigandNeighbors: {
        AltId: "rcsb_ligand_neighbors.alt_id";
        AtomId: "rcsb_ligand_neighbors.atom_id";
        AuthSeqId: "rcsb_ligand_neighbors.auth_seq_id";
        CompId: "rcsb_ligand_neighbors.comp_id";
        Distance: "rcsb_ligand_neighbors.distance";
        LigandAltId: "rcsb_ligand_neighbors.ligand_alt_id";
        LigandAsymId: "rcsb_ligand_neighbors.ligand_asym_id";
        LigandAtomId: "rcsb_ligand_neighbors.ligand_atom_id";
        LigandCompId: "rcsb_ligand_neighbors.ligand_comp_id";
        LigandEntityId: "rcsb_ligand_neighbors.ligand_entity_id";
        LigandIsBound: "rcsb_ligand_neighbors.ligand_is_bound";
        LigandModelId: "rcsb_ligand_neighbors.ligand_model_id";
        SeqId: "rcsb_ligand_neighbors.seq_id";
    };
    static readonly RcsbPolymerEntityInstanceContainerIdentifiers: {
        AsymId: "rcsb_polymer_entity_instance_container_identifiers.asym_id";
        AuthAsymId: "rcsb_polymer_entity_instance_container_identifiers.auth_asym_id";
        AuthToEntityPolySeqMapping: "rcsb_polymer_entity_instance_container_identifiers.auth_to_entity_poly_seq_mapping";
        EntityId: "rcsb_polymer_entity_instance_container_identifiers.entity_id";
        EntryId: "rcsb_polymer_entity_instance_container_identifiers.entry_id";
        RcsbId: "rcsb_polymer_entity_instance_container_identifiers.rcsb_id";
    };
    static readonly RcsbPolymerInstanceAnnotation: {
        AnnotationId: "rcsb_polymer_instance_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_polymer_instance_annotation.annotation_lineage.depth";
            Id: "rcsb_polymer_instance_annotation.annotation_lineage.id";
            Name: "rcsb_polymer_instance_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_polymer_instance_annotation.assignment_version";
        Description: "rcsb_polymer_instance_annotation.description";
        Name: "rcsb_polymer_instance_annotation.name";
        Ordinal: "rcsb_polymer_instance_annotation.ordinal";
        ProvenanceSource: "rcsb_polymer_instance_annotation.provenance_source";
        Type: "rcsb_polymer_instance_annotation.type";
    };
    static readonly RcsbPolymerInstanceFeature: {
        AdditionalProperties: {
            Name: "rcsb_polymer_instance_feature.additional_properties.name";
            Values: "rcsb_polymer_instance_feature.additional_properties.values";
        };
        AssignmentVersion: "rcsb_polymer_instance_feature.assignment_version";
        Description: "rcsb_polymer_instance_feature.description";
        FeatureId: "rcsb_polymer_instance_feature.feature_id";
        FeaturePositions: {
            BegCompId: "rcsb_polymer_instance_feature.feature_positions.beg_comp_id";
            BegSeqId: "rcsb_polymer_instance_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_polymer_instance_feature.feature_positions.end_seq_id";
            Value: "rcsb_polymer_instance_feature.feature_positions.value";
            Values: "rcsb_polymer_instance_feature.feature_positions.values";
        };
        Name: "rcsb_polymer_instance_feature.name";
        Ordinal: "rcsb_polymer_instance_feature.ordinal";
        ProvenanceSource: "rcsb_polymer_instance_feature.provenance_source";
        ReferenceScheme: "rcsb_polymer_instance_feature.reference_scheme";
        Type: "rcsb_polymer_instance_feature.type";
    };
    static readonly RcsbPolymerInstanceFeatureSummary: {
        Count: "rcsb_polymer_instance_feature_summary.count";
        Coverage: "rcsb_polymer_instance_feature_summary.coverage";
        MaximumLength: "rcsb_polymer_instance_feature_summary.maximum_length";
        MaximumValue: "rcsb_polymer_instance_feature_summary.maximum_value";
        MinimumLength: "rcsb_polymer_instance_feature_summary.minimum_length";
        MinimumValue: "rcsb_polymer_instance_feature_summary.minimum_value";
        Type: "rcsb_polymer_instance_feature_summary.type";
    };
    static readonly RcsbPolymerStructConn: {
        ConnectPartner: {
            LabelAltId: "rcsb_polymer_struct_conn.connect_partner.label_alt_id";
            LabelAsymId: "rcsb_polymer_struct_conn.connect_partner.label_asym_id";
            LabelAtomId: "rcsb_polymer_struct_conn.connect_partner.label_atom_id";
            LabelCompId: "rcsb_polymer_struct_conn.connect_partner.label_comp_id";
            LabelSeqId: "rcsb_polymer_struct_conn.connect_partner.label_seq_id";
            Symmetry: "rcsb_polymer_struct_conn.connect_partner.symmetry";
        };
        ConnectTarget: {
            AuthAsymId: "rcsb_polymer_struct_conn.connect_target.auth_asym_id";
            AuthSeqId: "rcsb_polymer_struct_conn.connect_target.auth_seq_id";
            LabelAltId: "rcsb_polymer_struct_conn.connect_target.label_alt_id";
            LabelAsymId: "rcsb_polymer_struct_conn.connect_target.label_asym_id";
            LabelAtomId: "rcsb_polymer_struct_conn.connect_target.label_atom_id";
            LabelCompId: "rcsb_polymer_struct_conn.connect_target.label_comp_id";
            LabelSeqId: "rcsb_polymer_struct_conn.connect_target.label_seq_id";
            Symmetry: "rcsb_polymer_struct_conn.connect_target.symmetry";
        };
        ConnectType: "rcsb_polymer_struct_conn.connect_type";
        Description: "rcsb_polymer_struct_conn.description";
        DistValue: "rcsb_polymer_struct_conn.dist_value";
        Id: "rcsb_polymer_struct_conn.id";
        OrdinalId: "rcsb_polymer_struct_conn.ordinal_id";
        Role: "rcsb_polymer_struct_conn.role";
        ValueOrder: "rcsb_polymer_struct_conn.value_order";
    };
    static readonly StructAsym: {
        PdbxPdbId: "struct_asym.pdbx_PDB_id";
        PdbxAltId: "struct_asym.pdbx_alt_id";
        PdbxOrder: "struct_asym.pdbx_order";
        PdbxType: "struct_asym.pdbx_type";
    };
}
export declare class CorePubmed {
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbPubmedAbstractText: "rcsb_pubmed_abstract_text";
    static readonly RcsbPubmedAffiliationInfo: "rcsb_pubmed_affiliation_info";
    static readonly RcsbPubmedCentralId: "rcsb_pubmed_central_id";
    static readonly RcsbPubmedContainerIdentifiers: {
        PubmedId: "rcsb_pubmed_container_identifiers.pubmed_id";
    };
    static readonly RcsbPubmedDoi: "rcsb_pubmed_doi";
    static readonly RcsbPubmedMeshDescriptors: "rcsb_pubmed_mesh_descriptors";
    static readonly RcsbPubmedMeshDescriptorsLineage: {
        Depth: "rcsb_pubmed_mesh_descriptors_lineage.depth";
        Id: "rcsb_pubmed_mesh_descriptors_lineage.id";
        Name: "rcsb_pubmed_mesh_descriptors_lineage.name";
    };
}
export declare class CoreUniprot {
    static readonly RcsbId: "rcsb_id";
    static readonly RcsbUniprotAccession: "rcsb_uniprot_accession";
    static readonly RcsbUniprotAlignments: {
        CoreEntityAlignments: {
            AlignedRegions: {
                Length: "rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.length";
                QueryBegin: "rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.query_begin";
                TargetBegin: "rcsb_uniprot_alignments.core_entity_alignments.aligned_regions.target_begin";
            };
            CoreEntityIdentifiers: {
                EntityId: "rcsb_uniprot_alignments.core_entity_alignments.core_entity_identifiers.entity_id";
                EntryId: "rcsb_uniprot_alignments.core_entity_alignments.core_entity_identifiers.entry_id";
            };
            Scores: {
                QueryCoverage: "rcsb_uniprot_alignments.core_entity_alignments.scores.query_coverage";
                QueryLength: "rcsb_uniprot_alignments.core_entity_alignments.scores.query_length";
                TargetCoverage: "rcsb_uniprot_alignments.core_entity_alignments.scores.target_coverage";
                TargetLength: "rcsb_uniprot_alignments.core_entity_alignments.scores.target_length";
            };
        };
    };
    static readonly RcsbUniprotAnnotation: {
        AdditionalProperties: {
            Name: "rcsb_uniprot_annotation.additional_properties.name";
            Values: "rcsb_uniprot_annotation.additional_properties.values";
        };
        AnnotationId: "rcsb_uniprot_annotation.annotation_id";
        AnnotationLineage: {
            Depth: "rcsb_uniprot_annotation.annotation_lineage.depth";
            Id: "rcsb_uniprot_annotation.annotation_lineage.id";
            Name: "rcsb_uniprot_annotation.annotation_lineage.name";
        };
        AssignmentVersion: "rcsb_uniprot_annotation.assignment_version";
        Description: "rcsb_uniprot_annotation.description";
        Name: "rcsb_uniprot_annotation.name";
        ProvenanceSource: "rcsb_uniprot_annotation.provenance_source";
        Type: "rcsb_uniprot_annotation.type";
    };
    static readonly RcsbUniprotContainerIdentifiers: {
        ReferenceSequenceIdentifiers: {
            DatabaseAccession: "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_accession";
            DatabaseIsoform: "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_isoform";
            DatabaseName: "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_name";
            ProvenanceSource: "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.provenance_source";
        };
        UniprotId: "rcsb_uniprot_container_identifiers.uniprot_id";
    };
    static readonly RcsbUniprotEntryName: "rcsb_uniprot_entry_name";
    static readonly RcsbUniprotExternalReference: {
        ProvenanceSource: "rcsb_uniprot_external_reference.provenance_source";
        ReferenceId: "rcsb_uniprot_external_reference.reference_id";
        ReferenceName: "rcsb_uniprot_external_reference.reference_name";
    };
    static readonly RcsbUniprotFeature: {
        AssignmentVersion: "rcsb_uniprot_feature.assignment_version";
        Description: "rcsb_uniprot_feature.description";
        FeatureId: "rcsb_uniprot_feature.feature_id";
        FeaturePositions: {
            BegCompId: "rcsb_uniprot_feature.feature_positions.beg_comp_id";
            BegSeqId: "rcsb_uniprot_feature.feature_positions.beg_seq_id";
            EndSeqId: "rcsb_uniprot_feature.feature_positions.end_seq_id";
            Value: "rcsb_uniprot_feature.feature_positions.value";
            Values: "rcsb_uniprot_feature.feature_positions.values";
        };
        Name: "rcsb_uniprot_feature.name";
        ProvenanceSource: "rcsb_uniprot_feature.provenance_source";
        ReferenceScheme: "rcsb_uniprot_feature.reference_scheme";
        Type: "rcsb_uniprot_feature.type";
    };
    static readonly RcsbUniprotKeyword: {
        Id: "rcsb_uniprot_keyword.id";
        Value: "rcsb_uniprot_keyword.value";
    };
    static readonly RcsbUniprotProtein: {
        Ec: {
            Number: "rcsb_uniprot_protein.ec.number";
            ProvenanceCode: "rcsb_uniprot_protein.ec.provenance_code";
        };
        Function: {
            Details: "rcsb_uniprot_protein.function.details";
            ProvenanceCode: "rcsb_uniprot_protein.function.provenance_code";
        };
        Gene: {
            Name: {
                Type: "rcsb_uniprot_protein.gene.name.type";
                Value: "rcsb_uniprot_protein.gene.name.value";
            };
        };
        Name: {
            ProvenanceCode: "rcsb_uniprot_protein.name.provenance_code";
            Value: "rcsb_uniprot_protein.name.value";
        };
        Sequence: "rcsb_uniprot_protein.sequence";
        SourceOrganism: {
            ProvenanceCode: "rcsb_uniprot_protein.source_organism.provenance_code";
            ScientificName: "rcsb_uniprot_protein.source_organism.scientific_name";
            TaxonomyId: "rcsb_uniprot_protein.source_organism.taxonomy_id";
        };
    };
}
